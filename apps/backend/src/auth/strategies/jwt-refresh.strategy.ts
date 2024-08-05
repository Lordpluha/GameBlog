import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import {
  JWT_REFRESH_STRATEGY,
  REFRESH_TOKEN_COOKIE,
  SECRET_JWT_REFRESH
} from '../constants/auth.constants'
import { ConfigService } from '@nestjs/config'
import { JwtGenerateDto } from '../dto/jwt-generate.dto'
import { Request } from 'express'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  JWT_REFRESH_STRATEGY
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: JwtRefreshStrategy.fromCookie,
      secretOrKey: configService.get(SECRET_JWT_REFRESH)
    })
  }

  async validate(payload: JwtGenerateDto) {
    return payload
  }

  static fromCookie(req: Request) {
    const refreshToken = req.cookies[REFRESH_TOKEN_COOKIE]
    if (!refreshToken) return
    return refreshToken
  }
}
