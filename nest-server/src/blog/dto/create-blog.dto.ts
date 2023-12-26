import { IsString, MaxLength } from 'class-validator'

export class CreateBlogDto {
	@MaxLength(150)
	@IsString()
	title: string

	@IsString()
	content: string
}
