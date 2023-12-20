import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService
  ){}

  async login(dto: LoginDto) {

  }

  async registration(dto: RegistrationDto) {
    
  }

}
