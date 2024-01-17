import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { CommentTypeEnum } from '../comment.type.enum'

export class CreateCommentDto {
	@IsNumber()
	contentId: number

	@IsEnum(CommentTypeEnum)
	type: CommentTypeEnum

	@IsString()
	text: string

	@IsOptional()
	@IsNumber()
	parentId: number = null
}
