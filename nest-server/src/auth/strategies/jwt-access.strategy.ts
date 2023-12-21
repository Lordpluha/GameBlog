import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JWT_ACCESS_STRATEGY, SECRET_JWT_ACCESS } from '../constants/auth.constants'
import { ConfigService } from '@nestjs/config'
import { JwtGenerateDto } from '../dto/jwt-generate.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, JWT_ACCESS_STRATEGY) {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get(SECRET_JWT_ACCESS)
		})
	}

	async validate(payload: JwtGenerateDto) {
		return payload
	}
}
