import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '@model/interfaces'

import { authApi } from '@store/api/AuthApi'

import { RootState } from '..'

export type TAuthState = {
	user: null | IUser
	token: string | null
	isAuthenticated: boolean
}

const initialState: TAuthState = {
	user: null,
	token: null,
	isAuthenticated: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState,
		tokenReceived: (state, action) => {}
	},
	extraReducers: builder => {
		builder
			.addMatcher(
				authApi.endpoints.loginUser.matchPending,
				(state, action) => {
					console.log('pending', action)
				}
			)
			.addMatcher(
				authApi.endpoints.loginUser.matchFulfilled,
				(state, action) => {
					console.log('fulfilled', action)
					state.user = action.payload.user
					state.token = action.payload.accessToken
					state.isAuthenticated = true
				}
			)
			.addMatcher(
				authApi.endpoints.loginUser.matchRejected,
				(state, action) => {
					console.log('rejected', action)
				}
			)
	}
})

export const { logout, tokenReceived } = authSlice.actions
export default authSlice.reducer

export const selectIsAuthenticated = (state: RootState) =>
	state.auth.isAuthenticated
