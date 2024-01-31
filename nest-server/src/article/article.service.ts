import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateArticleDto, UpdateArticleDto, PaginationArticleQueryDto } from './dto'
import { PrismaService } from 'src/database/prisma.service'
import { FileService } from 'src/file/file.service'
import * as generateSlug from 'slug'
import { ARTICLE_NOT_FOUND } from './constants/error.article.constants'
import { returnCategoryBaseObject } from 'src/category/dto/return-category.dto'
import { Role } from 'src/role/role.enum'
import { JwtGenerateDto } from 'src/auth/dto'
import { returnUserBaseObject } from 'src/user/dto/return-user.dto'
import { CategoryService } from 'src/category/category.service'
import { returnTagBaseObject } from 'src/tag/dto/return-tag.dto'
import { Prisma } from '@prisma/client'

@Injectable()
export class ArticleService {
	constructor(
		private prisma: PrismaService,
		private readonly fileService: FileService,
		private readonly categoryService: CategoryService
	) {}

	private includesAll: Prisma.ArticleInclude = {
		categories: {
			select: returnCategoryBaseObject
		},
		author: {
			select: returnUserBaseObject
		},
		tags: {
			select: returnTagBaseObject
		}
	}

	async create(dto: CreateArticleDto, userId: number, preview: Express.Multer.File) {
		console.log(dto)
		const previewUrl = await this.fileService.upload(preview)
		const existsCategories = await this.categoryService.getByIds([...dto.categories])
		const article = await this.prisma.article.create({
			data: {
				...dto,
				anyTags: dto.anyTags.join(),
				preview: previewUrl,
				categories: {
					connect: existsCategories.map(category => ({ id: category.id }))
				},
				author: {
					connect: { id: userId }
				}
			}
		})

		const updatedArticle = await this.prisma.article.update({
			where: { id: article.id },
			data: {
				slug: generateSlug(article.title + ' ' + article.id)
			},
			include: this.includesAll
		})
		return updatedArticle
	}

	async findAll({
		count,
		page,
		isVerif,
		authorId,
		categoryId,
		tagId,
		byPopularity,
		byPopularityComment
	}: PaginationArticleQueryDto) {
		const isVerifToBoolean = isVerif === 'true'
		const where: Prisma.ArticleWhereInput = { isVerif: isVerifToBoolean }
		const orderBy: Prisma.ArticleOrderByWithRelationInput[] = []
		if (byPopularity) {
			orderBy.push({ views: 'desc' })
		}
		if (byPopularityComment) {
			orderBy.push({ comments: { _count: 'desc' } })
		}
		orderBy.push({ createdAt: 'desc' })
		authorId ? (where['author'] = { id: authorId }) : {}
		categoryId ? (where['categories'] = { some: { id: categoryId } }) : {}
		tagId ? (where['tags'] = { some: { id: tagId } }) : {}

		console.log(orderBy)
		const [articles, articlesCount] = await this.prisma.$transaction([
			this.prisma.article.findMany({
				where,
				orderBy,
				skip: page * count - count,
				take: count,
				include: {
					...this.includesAll,
					_count: {
						select: {
							comments: true
						}
					}
				}
			}),
			this.prisma.article.count({ where })
		])
		const pageCount = Math.ceil(articlesCount / count)
		return {
			items: articles,
			count: articlesCount,
			pageCount
		}
	}

	async findOne(id: number) {
		const article = await this.prisma.article.findUnique({
			where: { id },
			include: this.includesAll
		})
		if (!article) throw new NotFoundException(ARTICLE_NOT_FOUND)
		await this.prisma.article.update({
			where: { id },
			data: {
				views: {
					increment: 1
				}
			}
		})
		return article
	}

	async update(
		id: number,
		dto: UpdateArticleDto,
		user: JwtGenerateDto,
		file?: Express.Multer.File
	) {
		const article = await this.findOne(id)
		if (user.role === Role.AUTHOR && article.authorId !== article.authorId) {
			throw new ForbiddenException()
		}
		if (user.role !== Role.ADMIN && user.role !== Role.EDITOR) throw new ForbiddenException()

		const dataUp = dto.title
			? {
					title: dto.title,
					slug: generateSlug(dto.title + ' ' + id)
				}
			: {}

		if (file) {
			const previewUrl = await this.fileService.upload(file)
			dataUp['preview'] = previewUrl
			this.fileService.delete(article.preview)
		}
		let connectAndDisconnect = {}
		if (dto.categories.length) {
			const existsCategories = await this.categoryService.getByIds([...dto.categories])
			connectAndDisconnect = {
				disconnect: article.categories.map(c => ({ id: c.id })),
				connect: existsCategories.map(c => ({ id: c.id }))
			}
		}

		const updatedArticle = await this.prisma.article.update({
			where: { id },
			data: {
				isVerif: false,
				...dto,
				...dataUp,
				anyTags: dto.anyTags.length ? dto.anyTags.join() : article.anyTags,
				categories: connectAndDisconnect
			},
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				}
			}
		})
		return updatedArticle
	}

	async findOneBySlug(slug: string) {
		const article = await this.prisma.article.findUnique({
			where: { slug },
			include: this.includesAll
		})
		if (!article) throw new NotFoundException(ARTICLE_NOT_FOUND)
		await this.prisma.article.update({
			where: { slug },
			data: {
				views: {
					increment: 1
				}
			}
		})
		return article
	}

	async confirmArticle(id: number) {
		const article = await this.findOne(id)
		return await this.prisma.article.update({
			where: { id },
			data: {
				isVerif: true,
				tags: {
					disconnect: article.tags.map(tag => ({ id: tag.id })),
					connectOrCreate: article.anyTags.split(',').map((tag: string) => ({
						create: { name: tag },
						where: { name: tag }
					}))
				}
			},
			include: this.includesAll
		})
	}

	async remove(id: number) {
		const { preview } = await this.findOne(id)
		this.fileService.delete(preview)
		await this.prisma.article.delete({
			where: { id }
		})
	}
}
