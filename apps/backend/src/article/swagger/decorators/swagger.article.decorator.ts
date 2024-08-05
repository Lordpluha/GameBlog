import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger'
import {
  PaginationArticleDto,
  SuccessArticleDto,
  SuccessUpdateArticleDto
} from '../return-article.swagger.dto'

export const DocSwaggerCreateArticle = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin or Editor or Author'),
    ApiOperation({
      summary: 'Create',
      description: 'We need have role Admin or Editor or Author'
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Success',
      type: SuccessArticleDto
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

export const DocSwaggerFindAllArticle = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'find all with pagination'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: PaginationArticleDto
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    })
  )
}

export const DocSwaggerFindOneArticle = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'find One'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessArticleDto
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  )
}

export const DocSwaggerUpdateArticle = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin or Editor or Author'),
    ApiOperation({
      summary: 'Update',
      description: 'We need have role Admin or Editor or Author'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessUpdateArticleDto
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

export const DocSwaggerDeleteArticle = () => {
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

export const DocSwaggerConfirmArticle = () => {
  return applyDecorators(
    ApiBearerAuth('We need have role Admin or Editor'),
    ApiOperation({
      summary: 'Confirm Article',
      description: 'We need have role Admin or Editor'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessArticleDto
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    })
  )
}
