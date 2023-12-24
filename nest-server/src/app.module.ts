import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from './configs/env.config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { FileModule } from './file/file.module'

@Module({
	imports: [ConfigModule.forRoot(EnvConfigOptions), AuthModule, UserModule, FileModule]
})
export class AppModule {}
