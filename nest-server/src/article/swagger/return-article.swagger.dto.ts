import { ApiProperty } from '@nestjs/swagger'
import { SuccessCategoryDto } from 'src/category/swagger/return-category.swagger.dto'
import { SuccessTagDto } from 'src/tag/swagger/return-tag.swagger.dto'
import { SuccessUserDto } from 'src/user/swagger/return-user.swagger.dto'

export class SuccessArticleBaseDto {
	@ApiProperty({ nullable: false })
	id: number
	@ApiProperty({ nullable: false })
	title: string
	@ApiProperty({ nullable: false })
	content: string
	@ApiProperty({ nullable: false })
	preview: string
	@ApiProperty({ nullable: false })
	slug: string
	@ApiProperty({ nullable: false, description: 'default false, after confirm is true' })
	isVerif: boolean
	@ApiProperty({ nullable: false })
	authorId: number
	@ApiProperty({ nullable: false })
	anyTags: string
	@ApiProperty({ nullable: false })
	createdAt: Date
	@ApiProperty({ nullable: false })
	updatedAt: Date
}

export class SuccessUpdateArticleDto extends SuccessArticleBaseDto {
	@ApiProperty({ nullable: false })
	author: SuccessUserDto

	@ApiProperty({ isArray: true, type: () => SuccessCategoryDto })
	categories: SuccessCategoryDto
}

export class SuccessArticleDto extends SuccessUpdateArticleDto {
	@ApiProperty({ isArray: true })
	tags: SuccessTagDto
}

export class PaginationArticleDto {
	@ApiProperty({ isArray: true })
	items: SuccessArticleDto
	@ApiProperty({ nullable: false })
	count: number
	@ApiProperty({ nullable: false })
	pageCount: number
}
