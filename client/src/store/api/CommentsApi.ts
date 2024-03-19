import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IComment } from '@model/interfaces'

import { TServerResponse } from '@store/model/ServerResponse.type'

export const commentsApi = createApi({
	reducerPath: 'api/comments',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_URL
	}),
	endpoints: build => ({
		getComments: build.query<TServerResponse<IComment>, void>({
			query: () => ({
				url: `comment`
			})
		}),
		getArtComments: build.query<TServerResponse<IComment>, number>({
			query: (artId: number) => ({
				url: `comment`,
				params: {
					articleId: `${artId}`
				}
			})
		})
	})
})

export const { useGetCommentsQuery, useGetArtCommentsQuery } = commentsApi
