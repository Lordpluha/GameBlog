import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICategory, IPublication } from '@model/interfaces'
import { TServerResponse } from '@store/serverResponse.type'



export const NewsApi = createApi({
	reducerPath: 'news/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/api/'
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
		getNewsBySlug: build.query<IPublication, string>({
			query: (slug: IPublication['slug']) => ({
				url: `article/slug/${slug}`
			})
		}),
		getNewsById: build.query<IPublication, number>({
			query: (id: IPublication['id']) => ({
				url: `article/${id}`
			})
		}),
		getCategory: build.query<ICategory[], void>({
			query: () => ({
				url: `category`
			}),
			transformResponse: (response: TServerResponse<ICategory>) =>
				response.items
		})
	})
})

export const { useGetNewsListQuery, useGetCategoryQuery, useGetNewsBySlugQuery, useGetNewsByIdQuery } = NewsApi