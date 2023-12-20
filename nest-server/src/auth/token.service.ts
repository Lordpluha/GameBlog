import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/common/prisma.service'
import { JwtGenerateDto } from './dto/jwt-generate.dto'
import { SECRET_JWT_REFRESH, SECRET_JWT_ACCESS } from './constants/auth.constants'

@Injectable()
export class TokenService {
	constructor(
		private prisma: PrismaService,
		private readonly configService: ConfigService,
		private jwtService: JwtService
	) {}

	async generate(dto: JwtGenerateDto) {
		const accessToken = await this.jwtService.signAsync(dto, {
			expiresIn: '30m',
			secret: this.configService.get(SECRET_JWT_ACCESS)
		})
		const refreshToken = await this.jwtService.signAsync(dto, {
			expiresIn: '15d',
			secret: this.configService.get(SECRET_JWT_REFRESH)
		})

		return { accessToken, refreshToken }
	}

	async save(refreshToken: string, userId: number) {
		const token = await this.prisma.token.upsert({
			where: { userId },
			update: { refreshToken },
			create: {
				refreshToken,
				user: {
					connect: { id: userId }
				}
			}
		})
		return token
	}

	async byToken(refreshToken: string) {
		const token = await this.prisma.token.findUnique({
			where: { refreshToken }
		})
		return token
	}

	async delete(id: number) {
		await this.prisma.token.delete({
			where: { id }
		})
	}
}
