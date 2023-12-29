import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { PrismaService } from 'src/common/prisma.service'
import { TAG_NOT_FOUND, TAG_WITH_NAME_ALREADY_EXISTS } from './constants/error.tag.tag'
import * as generateSlug from 'slug'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'

@Injectable()
export class TagService {
	constructor(private prisma: PrismaService) {}

	async create({ name }: CreateTagDto) {
		const oldTag = await this.byName(name)
		if (oldTag) throw new BadRequestException(TAG_WITH_NAME_ALREADY_EXISTS)
		const tag = await this.prisma.tag.create({
			data: { name }
		})
		return await this.prisma.tag.update({
			where: { id: tag.id },
			data: { slug: generateSlug(tag.name + ' ' + tag.id) }
		})
	}

	async byName(name: string) {
		const tag = await this.prisma.tag.findUnique({
			where: { name }
		})
		return tag
	}

	async findAll({ count, page }: PaginationQueryDto) {
		const [tags, tagsCount] = await this.prisma.$transaction([
			this.prisma.tag.findMany({
				skip: page * count - count,
				take: count,
				include: {
					_count: true
				},
				orderBy: {
					articles: {
						_count: 'desc'
					}
				}
			}),
			this.prisma.tag.count()
		])
		const pageCount = Math.ceil(tagsCount / count)
		return [tags, tagsCount, pageCount]
	}

	async findOne(id: number) {
		const tag = await this.prisma.tag.findUnique({
			where: { id }
		})
		if (!tag) throw new NotFoundException(TAG_NOT_FOUND)
		return tag
	}

	async update(id: number, { name }: UpdateTagDto) {
		await this.findOne(id)
		if (name) {
			const oldTag = await this.byName(name)
			if (oldTag) throw new BadRequestException(TAG_WITH_NAME_ALREADY_EXISTS)
		}
		const dataUp = name ? { name, slug: generateSlug(name + ' ' + id) } : {}
		const tag = this.prisma.tag.update({
			where: { id },
			data: { ...dataUp }
		})
		return tag
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.prisma.tag.delete({
			where: { id }
		})
	}

	async ids(ids: number[]) {
		const tag = await this.prisma.tag.findMany({
			where: {
				OR: ids.map(id => ({ id }))
			}
		})
		return tag
	}
}
