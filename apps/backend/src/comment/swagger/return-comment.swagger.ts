import { ApiProperty } from '@nestjs/swagger'
import { CommentTypeEnum } from '../comment.type.enum'
import { SuccessUserDto } from 'src/user/swagger/return-user.swagger.dto'

export class SuccessCommentDto {
  @ApiProperty({ nullable: false })
  id: number

  @ApiProperty({ nullable: false })
  text: string

  @ApiProperty({ nullable: false })
  type: CommentTypeEnum

  @ApiProperty({ nullable: true })
  articleId: number | null

  @ApiProperty({ nullable: true })
  blogId: number | null

  @ApiProperty({ nullable: false })
  authorId: number

  @ApiProperty({ nullable: true })
  level: number | null

  @ApiProperty({ nullable: true })
  parentId: number | null

  @ApiProperty({ nullable: false })
  createdAt: Date

  @ApiProperty({ nullable: false })
  updatedAt: Date
}

class CountChildrenDto {
  children: number
}

export class SuccessCommentDtoInclude extends SuccessCommentDto {
  @ApiProperty({ nullable: false })
  author: SuccessUserDto
  @ApiProperty({ nullable: false })
  _count: CountChildrenDto
}

export class SuccessCommentDtoOne extends SuccessCommentDtoInclude {
  @ApiProperty({ nullable: true, description: 'Children comment' })
  children: []
}

export class PaginationCommentDto {
  @ApiProperty({ isArray: true })
  items: SuccessCommentDtoInclude
  @ApiProperty({ nullable: false })
  count: number
  @ApiProperty({ nullable: false })
  pageCount: number
}
