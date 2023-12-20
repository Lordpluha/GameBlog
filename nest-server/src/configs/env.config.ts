import { ConfigModuleOptions } from '@nestjs/config'
import { envValidate } from 'src/common/env.validation'
import { IsNumber, IsString } from 'class-validator'

class EnvironmentVariables {
	@IsNumber()
	PORT: number

	@IsString()
	SECRET_JWT_ACCESS: string

	@IsString()
	SECRET_JWT_REFRESH: string
}

export const EnvConfigOptions: ConfigModuleOptions = {
	isGlobal: true,
	validate: envValidate(EnvironmentVariables)
}
