import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: "User's email", nullable: false })
  @IsEmail()
  email: string

  @ApiProperty({ description: "User's password", nullable: false })
  @MinLength(8)
  @MaxLength(30)
  @IsString()
  password: string

  @ApiProperty({ description: "User's name", nullable: false })
  @IsString()
  name: string
}
