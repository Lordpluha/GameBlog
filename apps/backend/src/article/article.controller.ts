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
	ParseIntPipe,
	UseInterceptors,
	ParseFilePipe,
	FileTypeValidator,
	UploadedFile,
	Query
} from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto, UpdateArticleDto, PaginationArticleQueryDto } from './dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { User } from 'src/user/decorators/user.decorator'
import { RolesAuth } from 'src/role/decorators/role.decorator'
import { Role } from 'src/role/role.enum'
import { JwtGenerateDto } from 'src/auth/dto'
import { ApiTags } from '@nestjs/swagger'
import {
	DocSwaggerCreateArticle,
	DocSwaggerFindAllArticle,
	DocSwaggerFindOneArticle,
	DocSwaggerUpdateArticle,
	DocSwaggerDeleteArticle,
	DocSwaggerConfirmArticle
} from './swagger/decorators'
import { CacheInterceptor } from '@nestjs/cache-manager'

@UseInterceptors(CacheInterceptor)
@ApiTags('Article')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('article')
export class ArticleController {
	constructor(private readonly articleService: ArticleService) {}

	@DocSwaggerCreateArticle()
	@HttpCode(HttpStatus.CREATED)
	@RolesAuth(Role.ADMIN, Role.EDITOR, Role.AUTHOR)
	@UseInterceptors(FileInterceptor('preview'))
	@Post()
	create(
		@Body() createArticleDto: CreateArticleDto,
		@User('id') userId: number,
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
		)
		preview: Express.Multer.File
	) {
		return this.articleService.create(createArticleDto, userId, preview)
	}
	@DocSwaggerFindAllArticle()
	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationArticleQueryDto) {
		return this.articleService.findAll(query)
	}

	@DocSwaggerFindOneArticle()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.articleService.findOne(id)
	}

	@DocSwaggerFindOneArticle()
	@HttpCode(HttpStatus.OK)
	@Get('slug/:slug')
	findOneBySlug(@Param('slug') slug: string) {
		return this.articleService.findOneBySlug(slug)
	}

	@DocSwaggerUpdateArticle()
	@HttpCode(HttpStatus.OK)
	@RolesAuth(Role.ADMIN, Role.EDITOR, Role.AUTHOR)
	@UseInterceptors(FileInterceptor('preview'))
	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@User() user: JwtGenerateDto,
		@Body() updateArticleDto: UpdateArticleDto,
		@UploadedFile(
			new ParseFilePipe({
				fileIsRequired: false,
				validators: [new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ })]
			})
		)
		file?: Express.Multer.File
	) {
		return this.articleService.update(id, updateArticleDto, user, file)
	}

	@DocSwaggerConfirmArticle()
	@HttpCode(HttpStatus.OK)
	@RolesAuth(Role.ADMIN, Role.EDITOR)
	@Get('confirm/:id')
	confirmArticle(@Param('id', ParseIntPipe) id: number) {
		return this.articleService.confirmArticle(id)
	}

	@DocSwaggerDeleteArticle()
	@HttpCode(HttpStatus.NO_CONTENT)
	@RolesAuth(Role.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.articleService.remove(id)
	}
}
