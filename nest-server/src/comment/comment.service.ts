import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { CreateCommentDto, PaginationArticleQueryDto, UpdateCommentDto } from './dto'
import { PrismaService } from 'src/database/prisma.service'
import { JwtGenerateDto } from 'src/auth/dto'
import { BlogService } from 'src/blog/blog.service'
import { ArticleService } from 'src/article/article.service'
import { CommentTypeEnum } from './comment.type.enum'
import {
	COMMENT_NOT_FOUND,
	COMMENT_WITH_ID_PARENT_NOT_FOUND
} from './constants/error.constants.comment'
import { Role } from 'src/role/role.enum'
import { Prisma } from '@prisma/client'
import { returnUserBaseObject } from 'src/user/dto'

@Injectable()
export class CommentService {
	constructor(
		private prisma: PrismaService,
		private readonly blogService: BlogService,
		private readonly articleService: ArticleService
	) {}

	async create(dto: CreateCommentDto, userId: number) {
		dto.type === CommentTypeEnum.ARTICLE
			? await this.articleService.findOne(dto.contentId)
			: await this.blogService.findOne(dto.contentId)

		let level = null
		const connect = {
			[dto.type]: {
				connect: {
					id: dto.contentId
				}
			}
		}
		if (dto.parentId) {
			const parentComment = await this.prisma.comment.findUnique({
				where: { id: dto.parentId }
			})
			console.log(parentComment)
			if (!parentComment) throw new NotFoundException(COMMENT_WITH_ID_PARENT_NOT_FOUND)
			if (parentComment.type !== dto.type) throw new BadRequestException()

			if (![parentComment.articleId, parentComment.blogId].includes(dto.contentId)) {
				throw new BadRequestException()
			}
			level = parentComment.level ? parentComment.level + 1 : 1
			connect['parent'] = { connect: { id: dto.parentId } }
		}

		const comment = await this.prisma.comment.create({
			data: {
				text: dto.text,
				type: dto.type,
				level,
				author: {
					connect: {
						id: userId
					}
				},
				...connect
			}
		})
		return comment
	}

	async findAll({ count, page, articleId, blogId }: PaginationArticleQueryDto) {
		const where: Prisma.CommentWhereInput = { level: null }
		articleId ? (where['article'] = { id: articleId }) : {}
		blogId ? (where['blog'] = { id: blogId }) : {}
		const [comments, commentsCount] = await this.prisma.$transaction([
			this.prisma.comment.findMany({
				skip: page * count - count,
				take: count,
				orderBy: {
					createdAt: 'desc'
				},
				where,
				include: {
					author: {
						select: returnUserBaseObject
					},
					_count: { select: { children: true } }
				}
			}),
			this.prisma.comment.count({ where })
		])
		const pageCount = Math.ceil(commentsCount / count)
		return {
			items: comments,
			count: commentsCount,
			pageCount
		}
	}

	async findOne(id: number, level = 1) {
		const include = this.getTreeIncludesChildren(level)
		const comment = await this.prisma.comment.findUnique({
			where: { id },
			include: {
				_count: { select: { children: true } },
				author: {
					select: returnUserBaseObject
				},
				...include
			}
		})
		if (!comment) throw new NotFoundException(COMMENT_NOT_FOUND)
		return comment
	}

	private getTreeIncludesChildren(level: number | null) {
		let include = undefined
		for (let i = 0; i < level; i++) {
			if (i === 0) {
				include = { children: true, _count: { select: { children: true } } }
			} else {
				include = { children: { include: include }, _count: { select: { children: true } } }
			}
		}
		return include
	}

	async update(id: number, dto: UpdateCommentDto, userId: number) {
		const comment = await this.findOne(id)
		if (comment.authorId !== userId) throw new ForbiddenException()
		return await this.prisma.comment.update({
			where: { id },
			data: {
				text: dto.text
			}
		})
	}

	async remove(id: number, user: JwtGenerateDto) {
		const comment = await this.findOne(id)
		if (user.role !== Role.ADMIN || comment.authorId !== user.id) throw new ForbiddenException()
		await this.prisma.comment.delete({
			where: { id }
		})
	}
}
