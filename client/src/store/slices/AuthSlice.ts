import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '@model/interfaces'
import { IUserPublic } from '@model/interfaces/User.interface'

import { authApi } from '@store/api/AuthApi'

import { RootState } from '..'

export type TAuthState = {
	user: IUser | null
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
			// Registration
			.addMatcher(
				authApi.endpoints.registrateUser.matchPending,
				(state, action) => {
					console.log('pending', action)
				}
			)
			.addMatcher(
				authApi.endpoints.registrateUser.matchFulfilled,
				(state, action) => {
					console.log('fulfilled', action)

					const actionUser = action.payload as IUserPublic
					state.user = actionUser
					state.token = action.payload.accessToken
					localStorage.setItem('token', action.payload.accessToken)
					state.isAuthenticated = true
				}
			)
			.addMatcher(
				authApi.endpoints.registrateUser.matchRejected,
				(state, action) => {
					console.log('rejected', action?.error)
				}
			)

			// Login
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

					const actionUser = action.payload as IUserPublic
					state.user = actionUser
					state.token = action.payload.accessToken
					localStorage.setItem('token', action.payload.accessToken)
					state.isAuthenticated = true
				}
			)
			.addMatcher(
				authApi.endpoints.loginUser.matchRejected,
				(state, action) => {
					console.log('rejected', action?.error)
				}
			)

			// Logout
			.addMatcher(
				authApi.endpoints.logoutUser.matchFulfilled,
				(state, action) => {
					console.log('fulfilled', action)
					localStorage.removeItem('token')
					state.user = {}
					state.isAuthenticated = false
				}
			)
	}
})

export const { logout, tokenReceived } = authSlice.actions
export default authSlice.reducer

export const selectIsAuthenticated = (state: RootState) =>
	state.auth.isAuthenticated
