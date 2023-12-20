import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService]
})
export class AuthModule {}
