import { Module } from '@nestjs/common'
import { BlogService } from './blog.service'
import { BlogController } from './blog.controller'
import { PrismaService } from 'src/common/prisma.service'
import { FileModule } from 'src/file/file.module'

@Module({
	imports: [FileModule],
	controllers: [BlogController],
	providers: [BlogService, PrismaService]
})
export class BlogModule {}
