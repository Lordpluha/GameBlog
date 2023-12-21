import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from './configs/env.config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [ConfigModule.forRoot(EnvConfigOptions), AuthModule, UserModule],
	controllers: [],
	providers: []
})
export class AppModule {}
