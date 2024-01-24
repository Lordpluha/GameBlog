import { Module } from '@nestjs/common'
import { CommentService } from './comment.service'
import { CommentController } from './comment.controller'
import { ArticleModule } from 'src/article/article.module'
import { BlogModule } from 'src/blog/blog.module'

@Module({
	imports: [ArticleModule, BlogModule],
	controllers: [CommentController],
	providers: [CommentService]
})
export class CommentModule {}
