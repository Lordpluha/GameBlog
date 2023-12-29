import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
	HttpCode,
	HttpStatus,
	ParseIntPipe,
	Query
} from '@nestjs/common'
import { TagService } from './tag.service'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { RolesAuth } from 'src/role/decorators/role.decorator'
import { Role } from 'src/role/role.enum'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('tag')
export class TagController {
	constructor(private readonly tagService: TagService) {}

	@HttpCode(HttpStatus.CREATED)
	@RolesAuth(Role.ADMIN)
	@Post()
	create(@Body() createTagDto: CreateTagDto) {
		return this.tagService.create(createTagDto)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationQueryDto) {
		return this.tagService.findAll(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.tagService.findOne(id)
	}

	@HttpCode(HttpStatus.OK)
	@RolesAuth(Role.ADMIN)
	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() updateTagDto: UpdateTagDto) {
		return this.tagService.update(id, updateTagDto)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@RolesAuth(Role.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.tagService.remove(id)
	}
}
