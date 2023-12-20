import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma.service';
import { USER_WITH_EMAIL_ALREADY_EXISTS } from './constants/error.constants.user';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const isUser = await this.byEmail(createUserDto.email)
    if(isUser) throw new BadRequestException(USER_WITH_EMAIL_ALREADY_EXISTS)
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto
      }
    })
    return user  
  }

  public async byEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {email}
    })
    return user
  }

  public async byId(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {id}
    })
    return user
  }

}
