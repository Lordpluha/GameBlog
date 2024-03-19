import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { newsApi } from '@store/api/NewsApi'

import { authApi } from './api/AuthApi'
import { commentsApi } from './api/CommentsApi'
import { authSlice } from './slices/AuthSlice'

const rootReducer = combineSlices(authSlice, authApi, newsApi, commentsApi)

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([
				authApi.middleware,
				newsApi.middleware,
				commentsApi.middleware
			])
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
