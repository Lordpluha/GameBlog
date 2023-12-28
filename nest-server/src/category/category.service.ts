import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from 'src/common/prisma.service'
import * as generateSlug from 'slug'
import {
	CATEGORY_NOT_FOUND,
	CATEGORY_WITH_NAME_ALREADY_EXISTS
} from './constants/error.category.constants'
import { PaginationCategoryQueryDto } from './dto/pagination.category.dto'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateCategoryDto) {
		const oldCategory = await this.byName(dto.name)
		if (oldCategory) throw new BadRequestException(CATEGORY_WITH_NAME_ALREADY_EXISTS)
		const { id } = await this.prisma.category.create({
			data: { name: dto.name }
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
		return [categories, categoriesCount]
	}

	async findOne(id: number) {
		const category = await this.prisma.category.findUnique({
			where: { id },
			include: {
				articles: true
			}
		})
		if (!category) throw new NotFoundException(CATEGORY_NOT_FOUND)
		return category
	}

	async update(id: number, dto: UpdateCategoryDto) {
		await this.findOne(id)
		if (dto.name) {
			const oldCategory = await this.byName(dto.name)
			if (oldCategory) throw new BadRequestException(CATEGORY_WITH_NAME_ALREADY_EXISTS)
		}
		const dataUp = dto.name ? { slug: generateSlug(dto.name + id) } : {}
		return await this.prisma.category.update({
			where: { id },
			data: { ...dto, ...dataUp }
		})
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.prisma.category.delete({
			where: { id }
		})
	}
}
