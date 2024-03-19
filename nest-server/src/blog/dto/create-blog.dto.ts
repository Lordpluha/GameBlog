import { Type } from 'class-transformer'
import { IsArray, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateBlogDto {
	@MaxLength(150)
	@IsString()
	title: string

	@IsString()
	content: string

	@IsNumber({}, { each: true })
	@Type(() => Number)
	@IsArray()
	categories: number[] = []
}
