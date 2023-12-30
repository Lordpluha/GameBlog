import { ApiProperty } from '@nestjs/swagger'
import { SuccessArticleBaseDto } from 'src/article/dto/return-article.swagger.dto'

export class SuccessCategoryDto {
	@ApiProperty({ nullable: false })
	id: number
	@ApiProperty({ nullable: false })
	name: string
	@ApiProperty({ nullable: false })
	slug: string
	@ApiProperty({ nullable: false })
	createdAt: Date
	@ApiProperty({ nullable: false })
	updatedAt: Date
}

export class SuccessCategoryWithArticle extends SuccessCategoryDto {
	@ApiProperty({ isArray: true, type: () => SuccessArticleBaseDto })
	articles: SuccessArticleBaseDto
}

class CountArticle {
	@ApiProperty({ description: 'Count article with this tag' })
	articles: number
}

export class SuccessCategoryDtoWithCount extends SuccessCategoryDto {
	@ApiProperty()
	_count: CountArticle
}

export class PaginationCategoryDto {
	@ApiProperty({ isArray: true })
	items: SuccessCategoryDtoWithCount
	@ApiProperty({ nullable: false })
	count: number
	@ApiProperty({ nullable: false })
	pageCount: number
}
