import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { setupStore } from '@/store'

import { router } from './routes/router'
import './styles/index.scss'

const store = setupStore()

function App() {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	)
}

export default App
