import { Module } from '@nestjs/common'
import { BlogService } from './blog.service'
import { BlogController } from './blog.controller'
import { FileModule } from 'src/file/file.module'
import { CategoryModule } from 'src/category/category.module'

@Module({
	imports: [FileModule, CategoryModule],
	controllers: [BlogController],
	providers: [BlogService],
	exports: [BlogService]
})
export class BlogModule {}
