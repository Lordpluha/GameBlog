import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { TokenService } from './token.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtAccessStrategy, JwtRefreshStrategy } from './strategies'
import { PrismaService } from 'src/common/prisma.service'

@Module({
	imports: [UserModule, JwtModule.register({}), PassportModule],
	controllers: [AuthController],
	providers: [AuthService, TokenService, JwtAccessStrategy, JwtRefreshStrategy, PrismaService]
})
export class AuthModule {}
