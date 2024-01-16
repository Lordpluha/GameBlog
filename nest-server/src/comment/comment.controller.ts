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
	HttpStatus
} from '@nestjs/common'
import { CommentService } from './comment.service'
import { CreateCommentDto } from './dto/create-comment.dto'
import { UpdateCommentDto } from './dto/update-comment.dto'
import { AccessJwtGuard } from 'src/auth/decorators'
import { User } from 'src/user/decorators'
import { JwtGenerateDto } from 'src/auth/dto'

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@HttpCode(HttpStatus.CREATED)
	@AccessJwtGuard()
	@Post()
	create(@Body() createCommentDto: CreateCommentDto, @User('id') userId: number) {
		return this.commentService.create(createCommentDto, userId)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll() {
		return this.commentService.findAll()
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.commentService.findOne(id)
	}

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
	@HttpCode(HttpStatus.NO_CONTENT)
	@AccessJwtGuard()
	@Delete(':id')
	remove(@User() user: JwtGenerateDto, @Param('id', ParseIntPipe) id: number) {
		return this.commentService.remove(id, user)
	}
}
