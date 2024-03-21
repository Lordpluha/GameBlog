import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IPublication } from '@model/interfaces'

import { TServerResponse } from '@store/model/ServerResponse.type'

export const newsApi = createApi({
	reducerPath: 'api/news',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	tagTypes: ['News', 'Categories'],
	endpoints: build => ({
		getNewsList: build.query<TServerResponse<IPublication>, number>({
			query: page => ({
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
		}),
		getNewsByPopularity: build.query<TServerResponse<IPublication>, number>(
			{
				query: count => ({
					url: 'article',
					params: {
						page: 1,
						isVerif: 'false',
						count,
						byPopularity: true
					}
				})
			}
		)
	})
})

export const {
	useGetNewsListQuery,
	useGetCategoriesQuery,
	useGetNewsBySlugQuery,
	useGetNewsByIdQuery,
	useGetNewsByPopularityQuery
} = newsApi
