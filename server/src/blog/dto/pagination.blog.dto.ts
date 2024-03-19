import { IsOptional, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'

export class PaginationBlogQueryDto extends PaginationQueryDto {
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	authorId?: number
}
