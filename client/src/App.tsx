import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

function App() {
	return (
		<>
			<BrowserRouter>
				<h1>GameBlog</h1>
				<AppRouter />
			</BrowserRouter>
		</>
	)
}

export default App
