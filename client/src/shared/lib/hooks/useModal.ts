import { type MutableRefObject, useEffect, useState } from 'react'

/**
 * Hook for close the window when clicked outside the component
 *
 * @param refModal - reference to the modal DOM
 */
const useModal = (refModal: MutableRefObject<HTMLElement>) => {
	const [modal, setModal] = useState<boolean>(false)

	useEffect(() => {
		const handleClick = (e: globalThis.MouseEvent) => {
			if (
				refModal.current &&
				!refModal.current.contains(e.target as Node)
			) {
				setModal(prev => !prev)
			}
		}

		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [refModal])

	return { modal, setModal }
}

export default useModal
