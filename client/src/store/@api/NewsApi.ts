import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IPublication } from '@model/interfaces'

import { TServerResponse } from '@store/serverResponse.type'

export const NewsApi = createApi({
	reducerPath: 'news/api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	endpoints: build => ({
		getNewsList: build.query<TServerResponse<IPublication>, number>({
			query: (page: number) => ({
				url: `article`,
				params: {
					page,
					isVerif: 'false'
				}
			})
		}),
		// Получение 1 новости по slug
		getNewsBySlug: build.query<IPublication, string>({
			query: (slug: IPublication['slug']) => ({
				url: `article/slug/${slug}`
			})
		}),
		// Получение 1 новости по id
		getNewsById: build.query<IPublication, number>({
			query: (id: IPublication['id']) => ({
				url: `article/${id}`
			})
		}),
		// Получение всех категорий
		getCategories: build.query<ICategory[], void>({
			query: () => ({
				url: `category`
			}),
			transformResponse: (response: TServerResponse<ICategory>) =>
				response.items
		})
	})
})

export const {
	useGetNewsListQuery,
	useGetCategoriesQuery,
	useGetNewsBySlugQuery,
	useGetNewsByIdQuery
} = NewsApi
