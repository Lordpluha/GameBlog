import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsOptional } from 'class-validator'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'

enum OrderByEnum {
  DESC = 'desc',
  ASC = 'asc'
}

export class PaginationCategoryQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: OrderByEnum })
  @IsOptional()
  @IsEnum(OrderByEnum)
  orderByCount: OrderByEnum = OrderByEnum.DESC
}
