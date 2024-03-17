//поменяла все на новый useModal
import { MouseEvent, type MutableRefObject, useEffect, useState } from 'react'

/**
 * Hook for close the window when clicked outside the component
 *
 * @param refModal - reference to the modal DOM
 */
const useModal = (
	refModal: MutableRefObject<HTMLElement>,
	refButton: MutableRefObject<HTMLElement>
) => {
	const [modal, setModal] = useState<boolean>(false)

	useEffect(() => {
		const handleClick = (e: globalThis.MouseEvent) => {
			e.stopPropagation()
			const targetNode = e.target instanceof Node ? e.target : null
			if (
				(refModal.current && refButton.current.contains(targetNode)) ||
				(!refModal.current && refButton.current.contains(targetNode)) ||
				!refModal.current.contains(targetNode)
			) {
				setModal(prev => !prev)
			}
		}

		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [refModal, refButton])

	return { modal, setModal }
}

export default useModal
