import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  MaxLength,
  IsString,
  IsArray,
  IsOptional,
  IsNumber
} from 'class-validator'

export class CreateArticleDto {
  @ApiProperty({ nullable: false })
  @MaxLength(150)
  @IsString()
  title: string

  @ApiProperty({ nullable: false })
  @IsString()
  content: string

  @ApiProperty({ description: 'Array of category ids', default: '[]' })
  @IsNumber({}, { each: true })
  @Type(() => Number)
  @IsArray()
  categories: number[] = []

  @ApiProperty({ description: 'Array of any tags ids', default: '[]' })
  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  anyTags: string[] = []
}
