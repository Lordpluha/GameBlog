import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger'
import {
  PaginationCommentDto,
  SuccessCommentDto,
  SuccessCommentDtoOne
} from '../return-comment.swagger'

export const DocSwaggerCreateComment = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({
      summary: 'Create'
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Success',
      type: SuccessCommentDto
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

export const DocSwaggerFindAllComment = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'find all with pagination'
    }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: PaginationCommentDto
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    })
  )
}

export const DocSwaggerFindOneComment = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Find one'
    }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Success',
      type: SuccessCommentDtoOne
    })
  )
}

export const DocSwaggerDeleteComment = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete'
    }),
    ApiBearerAuth(),
    ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Success' }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    }),
    ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  )
}

export const DocSwaggerUpdateComment = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({
      summary: 'update'
    }),
    ApiResponse({
      type: SuccessCommentDto
    }),
    ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized'
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Bad Request'
    })
  )
}
