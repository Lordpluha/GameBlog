import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiCookieAuth, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { SuccessDataDto } from '../dto/return-auth.swagger.dto'
import { REFRESH_TOKEN_COOKIE } from '../constants/auth.constants'

export const DocSwaggerLoginAuth = () => {
	return applyDecorators(
		ApiOperation({ summary: 'Login user' }),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: SuccessDataDto
		}),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
	)
}

export const DocSwaggerRegistrationAuth = () => {
	return applyDecorators(
		ApiOperation({ summary: 'Registration user' }),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: SuccessDataDto
		}),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
	)
}

export const DocSwaggerRefreshAuth = () => {
	return applyDecorators(
		ApiCookieAuth(REFRESH_TOKEN_COOKIE),
		ApiOperation({ summary: 'Refresh token' }),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: SuccessDataDto
		}),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' }),
		ApiResponse({
			status: HttpStatus.UNAUTHORIZED,
			description: 'Unauthorized'
		})
	)
}

export const DocSwaggerLogoutAuth = () => {
	return applyDecorators(
		ApiCookieAuth(REFRESH_TOKEN_COOKIE),
		ApiOperation({ summary: 'logout' }),
		ApiResponse({
			status: HttpStatus.NO_CONTENT,
			description: 'Success. No Content'
		}),
		ApiResponse({
			status: HttpStatus.UNAUTHORIZED,
			description: 'Unauthorized'
		})
	)
}
