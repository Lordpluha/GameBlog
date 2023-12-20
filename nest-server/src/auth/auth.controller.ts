import { Controller, Get, Post, Body, UsePipes, ValidationPipe, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';
import { CookieOptions, Response } from 'express';
import { MAX_AGE_COOKIE_REFRESH, REFRESH_TOKEN_COOKIE } from './constants/auth.constants';
import { Cookie } from './decorators/cookie.decorator';
import { RefreshJwtGuard } from './decorators/refresh-jwt.decorator';
import { User } from 'src/user/decorators/user.decorator';
import { ApiCookieAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessDataDto, SuccessRefreshDataDto } from './dto/return-data.dto';
import { AccessJwtGuard } from './decorators/access-jwt.decorator';

@ApiTags('Auth')
@UsePipes(new ValidationPipe())
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private optionsCookie: CookieOptions = {maxAge: MAX_AGE_COOKIE_REFRESH, httpOnly: true, path: '/'}

  @ApiOperation({ summary: "Login user" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: SuccessDataDto})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({passthrough: true}) res: Response
  ) {
    const {user, tokens} = await this.authService.login(dto)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return {...user, accessToken: tokens.accessToken}
  }

  @ApiOperation({ summary: "Registration user" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: SuccessDataDto})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @HttpCode(HttpStatus.OK)
  @Post('registration')
  async registration(
    @Body() dto: RegistrationDto,
    @Res({passthrough: true}) res: Response
  ) {
    const {user, tokens} = await this.authService.registration(dto)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return {...user, accessToken: tokens.accessToken}
  }

  @ApiCookieAuth(REFRESH_TOKEN_COOKIE)
  @ApiOperation({ summary: "Refresh token"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: SuccessRefreshDataDto})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  @RefreshJwtGuard()
  @Get('refresh')
  async refresh(
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @User('id') userId: number,
    @Res({passthrough: true}) res: Response
  ) {
    const {user, tokens} = await this.authService.refresh(refreshToken,userId)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return {...user, tokens}
  }

  @ApiCookieAuth(REFRESH_TOKEN_COOKIE)
  @ApiOperation({ summary: "logout"})
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: "Success. No Content"})
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  @RefreshJwtGuard()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('logout')
  async logout(
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @Res({passthrough: true}) res: Response
  ) {
    await this.authService.logout(refreshToken)
    res.clearCookie(REFRESH_TOKEN_COOKIE)
    return
  }
}
