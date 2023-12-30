import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	return <div>ErrorPage</div>
}

export default ErrorPage
