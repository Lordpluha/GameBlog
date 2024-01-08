import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from 'src/common/prisma.service'
import * as generateSlug from 'slug'
import {
	CATEGORY_NOT_FOUND,
	CATEGORY_WITH_ID_PARENT_NOT_FOUND,
	CATEGORY_WITH_NAME_ALREADY_EXISTS
} from './constants/error.category.constants'
import { PaginationCategoryQueryDto } from './dto/pagination.category.dto'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

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

	async findOne(id: number, isParent: boolean = false) {
		const category = await this.prisma.category.findUnique({
			where: { id },
			include: {
				articles: true
			}
		})
		if (!category) throw new NotFoundException(CATEGORY_NOT_FOUND)
		if (!isParent) return category
		const include = this.getTreeIncludesParent(category.level)
		return await this.prisma.category.findUnique({
			where: { id },
			include: {
				articles: true,
				...include
			}
		})
	}

	async update(id: number, dto: UpdateCategoryDto) {
		await this.findOne(id)
		if (dto.name) {
			const oldCategory = await this.byName(dto.name)
			if (oldCategory) throw new BadRequestException(CATEGORY_WITH_NAME_ALREADY_EXISTS)
		}
		const dataUp = dto.name ? { slug: generateSlug(dto.name + id) } : {}
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
		return await this.prisma.category.update({
			where: { id },
			data: {
				...dataUp,
				parent
			}
		})
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.prisma.category.delete({
			where: { id }
		})
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
