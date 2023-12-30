import { ApiProperty } from '@nestjs/swagger'
import { SuccessUserDto } from 'src/user/dto/return-user.swagger.dto'

export class SuccessDataDto extends SuccessUserDto {
	@ApiProperty({ description: 'Access token', nullable: false })
	accessToken: string
}
