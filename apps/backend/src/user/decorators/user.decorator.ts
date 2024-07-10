import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { Request } from 'express'
import { JwtGenerateDto } from 'src/auth/dto/jwt-generate.dto'

export const User = createParamDecorator((data: keyof JwtGenerateDto, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest() as Request
	const user = request.user
	return data ? user?.[data] : user
})
