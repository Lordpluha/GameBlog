import { IsOptional, IsNumber, IsBoolean, IsBooleanString } from 'class-validator'
import { Type } from 'class-transformer'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'

export class PaginationArticleQueryDto extends PaginationQueryDto {
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	authorId?: number

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	byPopularity: boolean = false

	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	categoryId?: number

	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	tagId?: number

	@IsOptional()
	@IsBooleanString()
	isVerif: string = 'true'
}
