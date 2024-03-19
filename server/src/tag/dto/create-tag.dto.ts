import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateTagDto {
	@ApiProperty({ nullable: false })
	@IsString()
	name: string
}
