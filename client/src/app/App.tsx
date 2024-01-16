import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { setupStore } from '../others/store'
import { router } from '../pages/routes'
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
