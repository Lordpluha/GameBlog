import { ApiProperty } from '@nestjs/swagger'

export class SuccessTagDto {
  @ApiProperty({ nullable: false })
  id: number
  @ApiProperty({ nullable: false })
  name: string
  @ApiProperty({ nullable: false })
  createdAt: Date
  @ApiProperty({ nullable: false })
  updatedAt: Date
}

class CountArticle {
  @ApiProperty({ description: 'Count article with this tag' })
  articles: number
}

export class SuccessTagDtoWithCount extends SuccessTagDto {
  @ApiProperty()
  _count: CountArticle
}

export class PaginationTagDto {
  @ApiProperty({ isArray: true })
  items: SuccessTagDtoWithCount

  @ApiProperty({ nullable: false })
  count: number

  @ApiProperty({ nullable: false })
  pageCount: number
}
