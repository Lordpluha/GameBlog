import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { CommentTypeEnum } from '../comment.type.enum'
import { ApiProperty } from '@nestjs/swagger'

export class CreateCommentDto {
	@ApiProperty({ nullable: false, description: 'Id of blog or article' })
	@IsNumber()
	contentId: number

	@ApiProperty({ nullable: false })
	@IsEnum(CommentTypeEnum)
	type: CommentTypeEnum

	@ApiProperty({ nullable: false })
	@IsString()
	text: string

	@ApiProperty({ nullable: false })
	@IsOptional()
	@IsNumber()
	parentId: number = null
}
