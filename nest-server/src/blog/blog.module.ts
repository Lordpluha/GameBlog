import { Module } from '@nestjs/common'
import { BlogService } from './blog.service'
import { BlogController } from './blog.controller'
import { FileModule } from 'src/file/file.module'

@Module({
	imports: [FileModule],
	controllers: [BlogController],
	providers: [BlogService],
	exports: [BlogService]
})
export class BlogModule {}
