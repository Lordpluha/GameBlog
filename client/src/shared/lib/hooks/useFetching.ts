import { useState } from 'react'

/**
 * Custom react hook, which provides feature to render data after load
 *
 * @author Lordpluha
 * @param callback void function, which fetch data
 * @returns [async func, boolean, ErrorMessage]
 */
const useFetching = (callback: () => Promise<void>) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	/**
	 * Async function for providing props to callback and call it
	 * @async
	 * @param args rest of callback params, which provides to callback
	 */
	const fetching = async (...args: []) => {
		try {
			setIsLoading(true)
			await callback(...args)
		} catch (e) {
			if (e instanceof Error) setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetching, isLoading, error]
}

export default useFetching
