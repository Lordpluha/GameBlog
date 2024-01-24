import { Module } from '@nestjs/common'
import { TagService } from './tag.service'
import { TagController } from './tag.controller'
import { PrismaService } from 'src/database/prisma.service'

@Module({
	controllers: [TagController],
	providers: [TagService, PrismaService],
	exports: [TagService]
})
export class TagModule {}
