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
import { TagService } from './tag.service'
import { CreateTagDto, UpdateTagDto } from './dto'
import { RolesAuth } from 'src/role/decorators'
import { Role } from 'src/role/role.enum'
import { PaginationQueryDto } from 'src/common/pagination.query.dto'
import { ApiTags } from '@nestjs/swagger'
import {
  DocSwaggerCreateTag,
  DocSwaggerFindAllTag,
  DocSwaggerFindOneTag,
  DocSwaggerUpdateArticle
} from './swagger/decorators'
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager'

const CACHE_TIME = 30 * 1000
@ApiTags('Tag')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @DocSwaggerCreateTag()
  @HttpCode(HttpStatus.CREATED)
  @RolesAuth(Role.ADMIN)
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto)
  }

  @DocSwaggerFindAllTag()
  @CacheTTL(CACHE_TIME)
  @UseInterceptors(CacheInterceptor)
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.tagService.findAll(query)
  }

  @DocSwaggerFindOneTag()
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tagService.findOne(id)
  }

  @DocSwaggerUpdateArticle()
  @HttpCode(HttpStatus.OK)
  @RolesAuth(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTagDto: UpdateTagDto
  ) {
    return this.tagService.update(id, updateTagDto)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @RolesAuth(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tagService.remove(id)
  }
}
