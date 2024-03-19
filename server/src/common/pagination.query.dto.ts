import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional } from 'class-validator'

export class PaginationQueryDto {
	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	count: number = 10

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	@Type(() => Number)
	page: number = 1
}
