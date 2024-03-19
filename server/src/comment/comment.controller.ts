import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ValidationPipe,
	UsePipes,
	ParseIntPipe,
	HttpCode,
	HttpStatus,
	Query,
	UseInterceptors
} from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { AccessJwtGuard } from 'src/auth/decorators'
import { User } from 'src/user/decorators'
import { JwtGenerateDto } from 'src/auth/dto'
import { PaginationArticleQueryDto } from './dto'
import {
	DocSwaggerCreateComment,
	DocSwaggerFindAllComment,
	DocSwaggerFindOneComment,
	DocSwaggerDeleteComment,
	DocSwaggerUpdateComment
} from './swagger/decorators'
import { ApiTags } from '@nestjs/swagger'
import { CacheInterceptor } from '@nestjs/cache-manager'

@UseInterceptors(CacheInterceptor)
@ApiTags('Comment')
@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@DocSwaggerCreateComment()
	@HttpCode(HttpStatus.CREATED)
	@AccessJwtGuard()
	@Post()
	create(@Body() createCommentDto: CreateCommentDto, @User('id') userId: number) {
		return this.commentService.create(createCommentDto, userId)
	}

	@DocSwaggerFindAllComment()
	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationArticleQueryDto) {
		return this.commentService.findAll(query)
	}

	@DocSwaggerFindOneComment()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number, @Query('level') level?: number) {
		return this.commentService.findOne(id, +level)
	}

	@DocSwaggerUpdateComment()
	@HttpCode(HttpStatus.OK)
	@AccessJwtGuard()
	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateCommentDto: UpdateCommentDto,
		@User('id') userId: number
	) {
		return this.commentService.update(id, updateCommentDto, userId)
	}

	@DocSwaggerDeleteComment()
	@HttpCode(HttpStatus.NO_CONTENT)
	@AccessJwtGuard()
	@Delete(':id')
	remove(@User() user: JwtGenerateDto, @Param('id', ParseIntPipe) id: number) {
		return this.commentService.remove(id, user)
	}
}
