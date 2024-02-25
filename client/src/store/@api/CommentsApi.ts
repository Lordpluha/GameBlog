import { IComment } from "@model/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TServerResponse } from "@store/serverResponse.type";

export const CommentsApi = createApi({
  reducerPath:'comments/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/'
  }),
  endpoints: build => ({
    getComments: build.query<TServerResponse<IComment>, void>({
      query:() => ({
        url: `comment`
      })
    }),
    getArtComments: build.query<TServerResponse<IComment>, number>({
      query:(artId:number) => ({
        url: `comment`,
        params: {
          articleId: `${artId}`
        }
      })
    })
  })
})

export const {useGetCommentsQuery} = CommentsApi