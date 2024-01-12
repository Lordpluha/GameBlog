import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { LoginDto, RegistrationDto } from './dto'
import { UserService } from 'src/user/user.service'
import { USER_WITH_EMAIL_ALREADY_EXISTS } from 'src/user/constants/error.constants.user'
import { hash, genSalt, compare } from 'bcrypt'
import { TokenService } from './token.service'
import { INCORRECT_PASSWORD, USER_EMAIL_NOT_FOUND } from './constants/error.auth.constants'
import { User } from '@prisma/client'
@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly tokenService: TokenService
	) {}

	async login({ email, password }: LoginDto) {
		const user = await this.userService.byEmail(email, true)
		if (!user) throw new BadRequestException(USER_EMAIL_NOT_FOUND)
		const isMatch = await compare(password, user.password)
		if (!isMatch) throw new BadRequestException(INCORRECT_PASSWORD)
		const data = await this.genAndSaveTokens(user)
		return data
	}

	async registration(dto: RegistrationDto) {
		const oldUser = await this.userService.byEmail(dto.email, true)
		if (oldUser) throw new BadRequestException(USER_WITH_EMAIL_ALREADY_EXISTS)
		const salt = await genSalt(7)
		const hashPassword = await hash(dto.password, salt)
		const user = await this.userService.create({
			...dto,
			password: hashPassword
		})
		const data = await this.genAndSaveTokens(user)
		return data
	}

	async refresh(refreshToken: string, userId: number) {
		const token = await this.tokenService.byToken(refreshToken)
		const user = await this.userService.byId(userId, true)
		if (!token || !user) throw new UnauthorizedException()
		const userDto = { id: user.id, email: user.email, name: user.name, role: user.role }
		const tokens = await this.tokenService.generate(userDto)
		await this.tokenService.save(tokens.refreshToken, user.id)
		return {
			user: userDto,
			tokens
		}
	}

	async logout(refreshToken: string) {
		const token = await this.tokenService.byToken(refreshToken)
		if (!token) return
		await this.tokenService.delete(token.id)
	}

	private async genAndSaveTokens(user: User) {
		const userDto = { email: user.email, id: user.id, name: user.name, role: user.role }
		const tokens = await this.tokenService.generate(userDto)
		await this.tokenService.save(tokens.refreshToken, user.id)
		return {
			user: userDto,
			tokens
		}
	}
}
