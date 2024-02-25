import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { NewsApi } from '@store/@api/NewsApi'
import { CommentsApi } from './@api/CommentsApi'

// import UserAPI from '@/api/UserAPI'

// import UserReducer from './slices/UserSlice'

const rootReducer = combineReducers({
	// UserReducer,
	// [UserAPI.reducerPath]: UserAPI.reducer
	[NewsApi.reducerPath]: NewsApi.reducer,
	[CommentsApi.reducerPath]: CommentsApi.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([
				NewsApi.middleware,
				CommentsApi.middleware
			])
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
