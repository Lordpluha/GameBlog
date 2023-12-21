import { ApiProperty } from '@nestjs/swagger'

export class SuccessUserDto {
	@ApiProperty({ description: "User's email", nullable: false })
	email: string
	@ApiProperty({ description: "User's id", nullable: false })
	id: number
	@ApiProperty({ description: "User's name", nullable: false })
	name: number
}

export class TokensDataDto {
	@ApiProperty({ description: 'Access token', nullable: false })
	accessToken: string

	@ApiProperty({ description: 'Access token', nullable: false })
	refreshToken: string
}

export class SuccessDataDto extends SuccessUserDto {
	@ApiProperty({ description: 'Access token', nullable: false })
	accessToken: string
}

export class SuccessRefreshDataDto extends SuccessUserDto {
	@ApiProperty()
	tokens: TokensDataDto
}
