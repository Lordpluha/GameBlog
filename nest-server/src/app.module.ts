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
import { TagModule } from './tag/tag.module'
import { CacheModule } from '@nestjs/cache-manager'
import { CacheManagerOptions } from './configs/cache-manager.env'

@Module({
	imports: [
		CacheModule.register(CacheManagerOptions),
		ConfigModule.forRoot(EnvConfigOptions),
		AuthModule,
		UserModule,
		FileModule,
		BlogModule,
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'static')
		}),
		CategoryModule,
		ArticleModule,
		TagModule
	]
})
export class AppModule {}
