import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  return <div>ErrorPage</div>
}

export default ErrorPage
