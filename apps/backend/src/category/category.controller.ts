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
	Query,
	UseInterceptors
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto, UpdateCategoryDto, PaginationCategoryQueryDto } from './dto'
import { RolesAuth } from 'src/role/decorators'
import { Role } from 'src/role/role.enum'
import { ApiTags } from '@nestjs/swagger'
import {
	DocSwaggerCreateCategory,
	DocSwaggerFindAllCategory,
	DocSwaggerFindOneCategory,
	DocSwaggerUpdateCategory,
	DocSwaggerDeleteCategory
} from './swagger/decorators'
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager'

const CACHE_TIME = 30 * 1000
@ApiTags('Category')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@DocSwaggerCreateCategory()
	@HttpCode(HttpStatus.CREATED)
	@RolesAuth(Role.ADMIN)
	@Post()
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoryService.create(createCategoryDto)
	}

	@DocSwaggerFindAllCategory()
	@CacheTTL(CACHE_TIME)
	@UseInterceptors(CacheInterceptor)
	@HttpCode(HttpStatus.OK)
	@Get()
	findAll(@Query() query: PaginationCategoryQueryDto) {
		return this.categoryService.findAll(query)
	}

	@CacheTTL(CACHE_TIME)
	@UseInterceptors(CacheInterceptor)
	@DocSwaggerFindOneCategory()
	@HttpCode(HttpStatus.OK)
	@Get('slug/:slug')
	findOneBySlug(@Param('slug') slug: string) {
		return this.categoryService.findOnebySlug(slug)
	}

	@DocSwaggerFindOneCategory()
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number, @Query('isParent') isParent: boolean) {
		return this.categoryService.findOne(id, isParent)
	}

	@DocSwaggerUpdateCategory()
	@HttpCode(HttpStatus.OK)
	@RolesAuth(Role.ADMIN)
	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
		return this.categoryService.update(id, updateCategoryDto)
	}

	@DocSwaggerDeleteCategory()
	@HttpCode(HttpStatus.NO_CONTENT)
	@RolesAuth(Role.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.categoryService.remove(id)
	}
}
