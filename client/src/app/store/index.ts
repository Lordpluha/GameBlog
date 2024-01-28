import { configureStore } from '@reduxjs/toolkit'
import UserAPI from '@/pages/api/UserAPI'
import { combineReducers } from 'redux'

import UserReducer from '../../features/lib/store/slices/UserSlice'

const rootReducer = combineReducers({
	UserReducer,
	[UserAPI.reducerPath]: UserAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(UserAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
