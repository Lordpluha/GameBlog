import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger'
import { PaginationTagDto, SuccessTagDto } from '../return-tag.swagger.dto'

export const DocSwaggerFindAllTag = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'find all with pagination'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: PaginationTagDto
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    })
  )
}

export const DocSwaggerCreateTag = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin'),
    ApiOperation({
      summary: 'Create',
      description: 'We need have role Admin'
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Success',
      type: SuccessTagDto
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    })
  )
}

export const DocSwaggerFindOneTag = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'find by id'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessTagDto
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  )
}

export const DocSwaggerUpdateArticle = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin'),
    ApiOperation({
      summary: 'Update',
      description: 'We need have role Admin'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessTagDto
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    })
  )
}

export const DocSwaggerDeleteTag = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin'),
    ApiOperation({
      summary: 'Delete',
      description: 'We need have role Admin'
    }),
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Success'
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    })
  )
}
