import { IsOptional, IsNumber, IsBoolean, IsBooleanString } from 'class-validator'
import { Type } from 'class-transformer'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class PaginationArticleQueryDto extends PaginationQueryDto {
	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	authorId?: number

	@ApiPropertyOptional()
	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	byPopularity: boolean = false

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	categoryId?: number

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	tagId?: number

	@ApiPropertyOptional()
	@IsOptional()
	@IsBooleanString()
	isVerif: string = 'true'
}
