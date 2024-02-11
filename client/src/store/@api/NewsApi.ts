import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IPublication } from '@model/interfaces'

export type TNewsListResponse<T> = {
	count: number
	pageCount: number
	items: T[]
}

export const NewsApi = createApi({
	reducerPath: 'news/api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	endpoints: build => ({
		getNewsList: build.query<TNewsListResponse<IPublication>, number>({
			query: (page: number) => ({
				url: `article`,
				params: {
					page,
					isVerif: 'false'
				}
			})
		}),
		getCategory: build.query<ICategory[], void>({
			query: () => ({
				url: `category`
			}),
			transformResponse: (response: TNewsListResponse<ICategory>) =>
				response.items
		})
	})
})

export const { useGetNewsListQuery, useGetCategoryQuery } = NewsApi
