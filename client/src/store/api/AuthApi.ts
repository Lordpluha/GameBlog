import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import { IUser } from '@model/interfaces'

import { logout, tokenReceived } from '@store/slices/AuthSlice'

export type TSuccessUserResp = {
	email: string
	id: number
	name: string
	role: string
	accessToken: string
}

export type TRegistrateUserDto = Pick<IUser, 'email' | 'password' | 'name'>
export type TLoginUserDto = Pick<IUser, 'email' | 'password'>

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_SERVER_URL}/auth`
})

// Request interceptor
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const authHeader = `Bearer ${localStorage.getItem('token')}`

	let result = await baseQuery(args, api, extraOptions)

	if (result.error && result.error.status === 401) {
		// try to get a new token
		const refreshResult = await baseQuery(
			'/refreshToken',
			api,
			extraOptions
		)
		if (refreshResult.data) {
			// store the new token
			api.dispatch(tokenReceived(refreshResult.data))
			// retry the initial query
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logout())
		}
	}
	return result
}

export const authApi = createApi({
	reducerPath: 'api/auth',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['Auth'],

	endpoints: build => ({
		registrateUser: build.query<TSuccessUserResp, TRegistrateUserDto>({
			query: user => ({
				url: `registration`,
				body: {
					...user
				}
			})
		}),
		loginUser: build.query<TSuccessUserResp, TLoginUserDto>({
			query: user => ({
				url: 'login',
				body: {
					...user
				}
			})
		}),
		logoutUser: build.query({
			query: () => ({
				url: 'logout'
			})
		}),
		refreshToken: build.query({
			query: () => ({
				url: 'refresh'
			})
		})
	})
})

export const { useRegistrateUserQuery, useLoginUserQuery } = authApi
