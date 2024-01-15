import { Action, createSlice } from '@reduxjs/toolkit'

import { TUserState } from '../types/UserSlice.types'

const InitialState: TUserState = {
	users: [],
	loading: false,
	error: ''
}

interface RejectedAction extends Action {
	error: Error
}

function isRejectedAction(action: Action): action is RejectedAction {
	return action.type.endsWith('rejected')
}

const UserSlice = createSlice({
	name: 'user',
	initialState: InitialState,
	reducers: {
		usersLoading(state) {
			state.loading = true
		},
		usersLoaded(state, action) {
			state.loading = false
			state.users = action.payload
		},
		usersLoadError(state, action) {
			state.loading = false
			state.error = action.payload
		}
	}
})

export const { usersLoading, usersLoaded } = UserSlice.actions
export default UserSlice.reducer
