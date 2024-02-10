import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IPublication } from '@model/interfaces'

export type TNewsListResponce<T> = {
	count: number
	pageCount: number
	items: T[]
}

export const newslistApi = createApi({
	reducerPath: 'newslist/api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.SERVER_URL
	}),
	endpoints: build => ({
		getNewsList: build.query<TNewsListResponce<IPublication>, number>({
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
			transformResponse: (respose: TNewsListResponce<ICategory>) =>
				respose.items
		})
	})
})

export const { useGetNewsListQuery, useGetCategoryQuery } = newslistApi
