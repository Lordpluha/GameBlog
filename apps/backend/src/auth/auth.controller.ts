import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
  Res
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegistrationDto } from './dto'
import { CookieOptions, Response } from 'express'
import {
  MAX_AGE_COOKIE_REFRESH,
  REFRESH_TOKEN_COOKIE
} from './constants/auth.constants'
import { Cookie, RefreshJwtGuard } from './decorators'
import { User } from 'src/user/decorators'
import { ApiTags } from '@nestjs/swagger'
import {
  DocSwaggerLoginAuth,
  DocSwaggerLogoutAuth,
  DocSwaggerRefreshAuth,
  DocSwaggerRegistrationAuth
} from './swagger/decorators'

@ApiTags('Auth')
@UsePipes(new ValidationPipe())
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private optionsCookie: CookieOptions = {
    maxAge: MAX_AGE_COOKIE_REFRESH,
    httpOnly: true,
    path: '/'
  }

  @DocSwaggerLoginAuth()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { user, tokens } = await this.authService.login(dto)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return { ...user, accessToken: tokens.accessToken }
  }

  @DocSwaggerRegistrationAuth()
  @HttpCode(HttpStatus.OK)
  @Post('registration')
  async registration(
    @Body() dto: RegistrationDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { user, tokens } = await this.authService.registration(dto)
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return { ...user, accessToken: tokens.accessToken }
  }

  @DocSwaggerRefreshAuth()
  @RefreshJwtGuard()
  @Get('refresh')
  async refresh(
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @User('id') userId: number,
    @Res({ passthrough: true }) res: Response
  ) {
    const { user, tokens } = await this.authService.refresh(
      refreshToken,
      userId
    )
    res.cookie(REFRESH_TOKEN_COOKIE, tokens.refreshToken, this.optionsCookie)
    return { ...user, accessToken: tokens.accessToken }
  }

  @DocSwaggerLogoutAuth()
  @RefreshJwtGuard()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('logout')
  async logout(
    @Cookie(REFRESH_TOKEN_COOKIE) refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    await this.authService.logout(refreshToken)
    res.clearCookie(REFRESH_TOKEN_COOKIE)
    return
  }
}
