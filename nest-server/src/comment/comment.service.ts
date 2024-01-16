import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { CreateCommentDto, UpdateCommentDto } from './dto'
import { PrismaService } from 'src/common/prisma.service'
import { JwtGenerateDto } from 'src/auth/dto'
import { BlogService } from 'src/blog/blog.service'
import { ArticleService } from 'src/article/article.service'
import { CommentTypeEnum } from './comment.type.enum'
import {
	COMMENT_NOT_FOUND,
	COMMENT_WITH_ID_PARENT_NOT_FOUND
} from './constants/error.constants.comment'
import { Role } from 'src/role/role.enum'

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

	findAll() {}

	async findOne(id: number) {
		const comment = await this.prisma.comment.findUnique({
			where: { id }
		})
		if (!comment) throw new NotFoundException(COMMENT_NOT_FOUND)
		return comment
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
