import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from '@pages/lib/routes'

import { setupStore } from './store'
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
