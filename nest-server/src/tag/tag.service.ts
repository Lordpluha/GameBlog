import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common'
import { CreateTagDto, UpdateTagDto } from './dto'
import { PrismaService } from 'src/database/prisma.service'
import { TAG_NOT_FOUND, TAG_WITH_NAME_ALREADY_EXISTS } from './constants/error.constants.tag'
import * as generateSlug from 'slug'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'

@Injectable()
export class TagService {
	private CACHE_TIME = 30 * 1000
	constructor(
		private prisma: PrismaService,
		@Inject(CACHE_MANAGER) private cacheManager: Cache
	) {}

	async create({ name }: CreateTagDto) {
		const oldTag = await this.byName(name)
		if (oldTag) throw new BadRequestException(TAG_WITH_NAME_ALREADY_EXISTS)
		const tag = await this.prisma.tag.create({
			data: { name }
		})
		const updatedTag = await this.prisma.tag.update({
			where: { id: tag.id },
			data: { slug: generateSlug(tag.name + ' ' + tag.id) }
		})
		await this.cacheManager.set(`tag-${tag.id}`, updatedTag, this.CACHE_TIME)
		return updatedTag
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
		return {
			items: tags,
			count: tagsCount,
			pageCount
		}
	}

	async findOne(id: number, isReset = false) {
		const key = `tag-${id}`
		if (isReset) await this.cacheManager.del(key)
		const cacheTag = this.cacheManager.del(key)
		if (cacheTag) return cacheTag
		const tag = await this.prisma.tag.findUnique({
			where: { id }
		})
		if (!tag) throw new NotFoundException(TAG_NOT_FOUND)
		await this.cacheManager.set(key, tag, this.CACHE_TIME)
		return tag
	}

	async update(id: number, { name }: UpdateTagDto) {
		await this.findOne(id, true)
		if (name) {
			const oldTag = await this.byName(name)
			if (oldTag) throw new BadRequestException(TAG_WITH_NAME_ALREADY_EXISTS)
		}
		const dataUp = name ? { name, slug: generateSlug(name + ' ' + id) } : {}
		const tag = this.prisma.tag.update({
			where: { id },
			data: { ...dataUp }
		})
		await this.cacheManager.set(`tag-${id}`, tag, this.CACHE_TIME)
		return tag
	}

	async remove(id: number) {
		await this.findOne(id)
		await this.cacheManager.del(`tag-${id}`)
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
