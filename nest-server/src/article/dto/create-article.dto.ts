import { Type } from 'class-transformer'
import { MaxLength, IsString, IsArray, IsOptional, IsNumber } from 'class-validator'

export class CreateArticleDto {
	@MaxLength(150)
	@IsString()
	title: string

	@IsString()
	content: string

	@IsNumber({}, { each: true })
	@Type(() => Number)
	@IsArray()
	categories: number[] = []

	@IsOptional()
	@IsString({ each: true })
	@IsArray()
	anyTags: string[] = []
}
