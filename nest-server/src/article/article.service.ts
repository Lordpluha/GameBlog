import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { PrismaService } from 'src/common/prisma.service'
import { FileService } from 'src/file/file.service'
import * as generateSlug from 'slug'
import { ARTICLE_NOT_FOUND } from './constants/error.article.constants'
import { returnCategoryBaseObject } from 'src/category/dto/return-category.dto'
import { Role } from 'src/role/role.enum'
import { JwtGenerateDto } from 'src/auth/dto/jwt-generate.dto'
import { returnUserBaseObject } from 'src/user/dto/return-user.dto'
import { PaginationArticleQueryDto } from './dto/pagination.article.dto'
import { CategoryService } from 'src/category/category.service'

@Injectable()
export class ArticleService {
	constructor(
		private prisma: PrismaService,
		private readonly fileService: FileService,
		private readonly categoryService: CategoryService
	) {}

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
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				},
				tags: true
			}
		})
		return updatedArticle
	}

	async findAll({
		count,
		page,
		isVerif,
		authorId,
		categoryId,
		tagId
	}: PaginationArticleQueryDto) {
		const isVerifToBoolean = isVerif === 'true'
		const where = { isVerif: isVerifToBoolean }
		authorId ? (where['author'] = { id: authorId }) : {}
		categoryId ? (where['category'] = { id: categoryId }) : {}
		tagId ? (where['tag'] = { id: categoryId }) : {}

		console.log(where)
		const [articles, articlesCount] = await this.prisma.$transaction([
			this.prisma.article.findMany({
				where,
				orderBy: {},
				skip: page * count - count,
				take: count,
				include: {
					author: {
						select: returnUserBaseObject
					},
					categories: {
						select: returnCategoryBaseObject
					},
					tags: true
				}
			}),
			this.prisma.article.count({ where })
		])
		const pageCount = Math.ceil(articlesCount / count)
		return [articles, articlesCount, pageCount]
	}

	async findOne(id: number) {
		const article = await this.prisma.article.findUnique({
			where: { id },
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				},
				tags: true
			}
		})
		if (!article) throw new NotFoundException(ARTICLE_NOT_FOUND)
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
		const existsCategories = await this.categoryService.getByIds([...dto.categories])
		const updatedArticle = await this.prisma.article.update({
			where: { id },
			data: {
				isVerif: false,
				...dto,
				...dataUp,
				anyTags: dto.anyTags ? dto.anyTags.join() : article.anyTags,
				categories: {
					disconnect: article.categories.map(c => ({ id: c.id })),
					connect: existsCategories.map(c => ({ id: c.id }))
				}
			},
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				},
				tags: {
					select: {
						id: true,
						name: true
					}
				}
			}
		})
		return updatedArticle
	}

	async findOneBySlug(slug: string) {
		const article = await this.prisma.article.findUnique({
			where: { slug },
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				},
				tags: true
			}
		})
		if (!article) throw new NotFoundException(ARTICLE_NOT_FOUND)
		return article
	}

	async confirmArticle(id: number) {
		const article = await this.findOne(id)
		return await this.prisma.article.update({
			where: { id },
			data: {
				isVerif: true,
				tags: {
					connectOrCreate: article.anyTags.split(',').map((tag: string) => ({
						create: { name: tag },
						where: { name: tag }
					}))
				}
			},
			include: {
				categories: {
					select: returnCategoryBaseObject
				},
				author: {
					select: returnUserBaseObject
				},
				tags: true
			}
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
