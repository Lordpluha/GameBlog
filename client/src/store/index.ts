import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { NewsApi } from '@store/@api/NewsApi'

// import UserAPI from '@/api/UserAPI'

// import UserReducer from './slices/UserSlice'

const rootReducer = combineReducers({
	// UserReducer,
	// [UserAPI.reducerPath]: UserAPI.reducer
	[NewsApi.reducerPath]: NewsApi.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(NewsApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
