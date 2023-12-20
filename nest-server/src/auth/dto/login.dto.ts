import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({ description: "User's email", nullable: false })
    @IsEmail()
    email: string

    @ApiProperty({ description: "User's password", nullable: false })
    @IsString()
    password: string
}