import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpCode,
	HttpStatus,
	UsePipes,
	ValidationPipe,
	UseInterceptors,
	UploadedFile,
	ParseFilePipe,
	FileTypeValidator,
	Query,
	ParseIntPipe
} from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreateBlogDto, UpdateBlogDto, PaginationBlogQueryDto } from './dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { AccessJwtGuard } from 'src/auth/decorators'
import { User } from 'src/user/decorators'

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('blog')
export class BlogController {
	constructor(private readonly blogService: BlogService) {}

	@HttpCode(HttpStatus.CREATED)
	@AccessJwtGuard()
	@UseInterceptors(FileInterceptor('preview'))
	@Post()
	create(
		@Body() createBlogDto: CreateBlogDto,
		@User('id') userId: number,
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
		)
		preview: Express.Multer.File
	) {
		return this.blogService.create(createBlogDto, userId, preview)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationBlogQueryDto) {
		return this.blogService.findAll(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.blogService.findOne(id)
	}

	@HttpCode(HttpStatus.OK)
	@Get('slug/:slug')
	findOneBySlug(@Param('slug') slug: string) {
		return this.blogService.bySlug(slug)
	}

	@HttpCode(HttpStatus.OK)
	@AccessJwtGuard()
	@UseInterceptors(FileInterceptor('preview'))
	@Patch(':id')
	update(
		@User('id') userId: number,
		@Param('id', ParseIntPipe) id: number,
		@Body() updateBlogDto: UpdateBlogDto,
		@UploadedFile(
			new ParseFilePipe({
				fileIsRequired: false,
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
		)
		file?: Express.Multer.File
	) {
		return this.blogService.update(id, userId, updateBlogDto, file)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@AccessJwtGuard()
	@Delete(':id')
	remove(@User('id') userId: number, @Param('id', ParseIntPipe) id: number) {
		return this.blogService.remove(id, userId)
	}
}
