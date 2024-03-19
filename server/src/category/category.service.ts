import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto, UpdateCategoryDto, PaginationCategoryQueryDto } from './dto'
import { PrismaService } from 'src/database/prisma.service'
import * as generateSlug from 'slug'
import {
	CATEGORY_NOT_FOUND,
	CATEGORY_WITH_ID_PARENT_NOT_FOUND,
	CATEGORY_WITH_NAME_ALREADY_EXISTS
} from './constants/error.category.constants'
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'
import { Category } from '@prisma/client'

@Injectable()
export class CategoryService {
	private CACHE_TIME = 30 * 1000
	constructor(
		private prisma: PrismaService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {}
	async create(dto: CreateCategoryDto) {
		const oldCategory = await this.byName(dto.name)
		if (oldCategory) throw new BadRequestException(CATEGORY_WITH_NAME_ALREADY_EXISTS)
		const parent = {}
		let levelCategory = null
		if (dto.parentId) {
			const { level } = await this.findOne(dto.parentId)
			levelCategory = level ? level + 1 : 1
			parent['connect'] = { id: dto.parentId }
		}
		const { id } = await this.prisma.category.create({
			data: {
				name: dto.name,
				level: levelCategory,
				parent
			}
		})
		const category = await this.prisma.category.update({
			where: { id },
			data: {
				slug: generateSlug(dto.name + ' ' + id)
			}
		})
		await this.cacheManager.set(`category-${category.id}-no-parent`, category, this.CACHE_TIME)
		return category
	}

	async findOnebySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: { slug },
			include: { articles: true }
		})
		if (!category) throw new NotFoundException(CATEGORY_NOT_FOUND)
		return category
	}

	async byName(name: string) {
		const category = await this.prisma.category.findUnique({
			where: { name }
		})
		return category
	}

	async getByIds(ids: number[]) {
		const category = await this.prisma.category.findMany({
			where: {
				OR: ids.map(id => ({ id }))
			}
		})
		return category
	}

	async findAll({ count, page, orderByCount }: PaginationCategoryQueryDto) {
		const [categories, categoriesCount] = await this.prisma.$transaction([
			this.prisma.category.findMany({
				skip: page * count - count,
				take: count,
				include: {
					_count: true
				},
				orderBy: {
					articles: {
						_count: orderByCount
					}
				}
			}),
			this.prisma.category.count()
		])
		const pageCount = Math.ceil(categoriesCount / count)
		return {
			items: categories,
			count: categoriesCount,
			pageCount
		}
	}

	async findOne(id: number, isParent: boolean = false, isReset = false) {
		const key = isParent ? `category-${id}-parent` : `category-${id}-no-parent`
		if (isReset) await this.cacheManager.del(key)
		const cacheCategory: Category = await this.cacheManager.get(key)
		if (cacheCategory) return cacheCategory
		const category = await this.prisma.category.findUnique({
			where: { id },
			include: {
				articles: true
			}
		})
		if (!category) throw new NotFoundException(CATEGORY_NOT_FOUND)
		await this.cacheManager.set(`category-${id}-no-parent`, category, this.CACHE_TIME)
		if (!isParent) return category
		const include = this.getTreeIncludesParent(category.level)
		const treeCategory = await this.prisma.category.findUnique({
			where: { id },
			include: {
				articles: true,
				...include
			}
		})
		await this.cacheManager.set(`category-${id}-parent`, treeCategory, this.CACHE_TIME)
		return treeCategory
	}

	async update(id: number, dto: UpdateCategoryDto) {
		await this.findOne(id)
		if (dto.name) {
			const oldCategory = await this.byName(dto.name)
			if (oldCategory) throw new BadRequestException(CATEGORY_WITH_NAME_ALREADY_EXISTS)
		}
		const dataUp = dto.name ? { slug: generateSlug(dto.name + id), name: dto.name } : {}
		const parent = {}
		if (dto.parentId) {
			parent['connect'] = { id: dto.parentId }
			const parentCategory = await this.prisma.category.findUnique({
				where: { id: dto.parentId }
			})
			if (!parentCategory) throw new NotFoundException(CATEGORY_WITH_ID_PARENT_NOT_FOUND)
			const levelCategory = parentCategory.level ? parentCategory.level + 1 : 1
			dataUp['level'] = levelCategory
			parent['connect'] = { id: dto.parentId }
		}
		const updatedCategory = await this.prisma.category.update({
			where: { id },
			data: {
				...dataUp,
				parent
			}
		})
		await this.cacheManager.set(`category-${id}-no-parent`, updatedCategory, this.CACHE_TIME)
		return updatedCategory
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.prisma.category.delete({
			where: { id }
		})
		await this.cacheManager.del(`category-${id}-parent`)
		await this.cacheManager.del(`category-${id}-no-parent`)
	}

	private getTreeIncludesParent(level: number | null) {
		let include = undefined
		for (let i = 0; i < level; i++) {
			if (i === 0) {
				include = { parent: true }
			} else {
				include = { parent: { include: include } }
			}
		}
		return include
	}
}
