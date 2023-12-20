import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string

    @MinLength(8)
    @MaxLength(30)
    @IsString()
    password: string
    
    @IsString()
    name: string
}
