import { Module } from '@nestjs/common'
import { ArticleService } from './article.service'
import { ArticleController } from './article.controller'
import { PrismaService } from 'src/common/prisma.service'
import { FileModule } from 'src/file/file.module'
import { CategoryModule } from 'src/category/category.module'

@Module({
	imports: [FileModule, CategoryModule],
	controllers: [ArticleController],
	providers: [ArticleService, PrismaService]
})
export class ArticleModule {}
