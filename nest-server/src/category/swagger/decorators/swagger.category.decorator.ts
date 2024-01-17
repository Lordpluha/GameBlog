import { HttpStatus, applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger'
import {
	PaginationCategoryDto,
	SuccessCategoryDto,
	SuccessCategoryWithArticle
} from '../return-category.swagger.dto'

export const DocSwaggerCreateCategory = () => {
	return applyDecorators(
		ApiBearerAuth('We need have role Admin'),
		ApiOperation({
			summary: 'Create',
			description: 'We need have role Admin'
		}),
		ApiResponse({
			status: HttpStatus.CREATED,
			description: 'Success',
			type: SuccessCategoryDto
		}),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' }),
		ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
	)
}

export const DocSwaggerFindAllCategory = () => {
	return applyDecorators(
		ApiOperation({
			summary: 'find all with pagination'
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: PaginationCategoryDto
		}),
		ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
	)
}

export const DocSwaggerFindOneCategory = () => {
	return applyDecorators(
		ApiOperation({
			summary: 'find One',
			description: 'if isParent is true then return category with tree of parents'
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: SuccessCategoryWithArticle
		}),
		ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
	)
}

export const DocSwaggerUpdateCategory = () => {
	return applyDecorators(
		ApiBearerAuth('We need have role Admin'),
		ApiOperation({
			summary: 'Update',
			description: 'We need have role Admin'
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Success',
			type: SuccessCategoryDto
		}),
		ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' }),
		ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' }),
		ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
	)
}

export const DocSwaggerDeleteCategory = () => {
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
		ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
	)
}
