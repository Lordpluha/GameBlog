import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigOptions } from './configs/env.config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { FileModule } from './file/file.module'
import { BlogModule } from './blog/blog.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { CategoryModule } from './category/category.module'
import { ArticleModule } from './article/article.module'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		AuthModule,
		UserModule,
		FileModule,
		BlogModule,
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'static')
		}),
		CategoryModule,
		ArticleModule
	]
})
export class AppModule {}
