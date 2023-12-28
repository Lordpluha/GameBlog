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
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PaginationCategoryQueryDto } from './dto/pagination.category.dto'
import { RolesAuth } from 'src/role/decorators/role.decorator'
import { Role } from 'src/role/role.enum'

@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@HttpCode(HttpStatus.CREATED)
	@RolesAuth(Role.ADMIN)
	@Post()
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoryService.create(createCategoryDto)
	}

	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationCategoryQueryDto) {
		return this.categoryService.findAll(query)
	}

	@HttpCode(HttpStatus.OK)
	@Get('slug/:slug')
	findOneBySlug(@Param('slug') slug: string) {
		return this.categoryService.findOnebySlug(slug)
	}

	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.categoryService.findOne(id)
	}

	@HttpCode(HttpStatus.OK)
	@RolesAuth(Role.ADMIN)
	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
		return this.categoryService.update(id, updateCategoryDto)
	}

	@HttpCode(HttpStatus.NO_CONTENT)
	@RolesAuth(Role.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.categoryService.remove(id)
	}
}
