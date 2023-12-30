import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateCategoryDto {
	@ApiProperty({ nullable: false })
	@IsString()
	name: string
}
