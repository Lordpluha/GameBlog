import { ApiProperty } from '@nestjs/swagger'
import { Role } from '@prisma/client'

export class SuccessUserDto {
  @ApiProperty({ description: "User's email", nullable: false })
  email: string
  @ApiProperty({ description: "User's id", nullable: false })
  id: number
  @ApiProperty({ description: "User's name", nullable: false })
  name: string
  @ApiProperty({
    description: "User's role",
    nullable: false,
    default: 'User'
  })
  role: Role
}
