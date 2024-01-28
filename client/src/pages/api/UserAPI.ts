import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const QueryLimit = 100

const UserAPI = createApi({
	reducerPath: 'UserApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.BASE_URL
	}),
	tagTypes: ['User'],
	endpoints: build => ({
		fetchAllUsers: build.query({
			query: (limit: number = QueryLimit) => ({
				url: '/users',
				params: {
					_limit: limit
				}
			}),
			providesTags: result => ['User']
		})
	})
})

export default UserAPI
