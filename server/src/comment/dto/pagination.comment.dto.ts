import { IsOptional, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class PaginationArticleQueryDto extends PaginationQueryDto {
	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	articleId?: number

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	blogId?: number
}
