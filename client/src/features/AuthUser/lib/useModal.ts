import {
	MouseEvent,
	type MutableRefObject,
	useEffect,
	useRef,
	useState
} from 'react'

/**
 * Hook for close the window when clicked outside the component
 *
 * @param refModal - reference to the modal DOM
 */
const useModal = (
	refModal: MutableRefObject<HTMLElement>,
	refButton: MutableRefObject<HTMLElement>[],
	refBtnRegistration: MutableRefObject<HTMLElement>,
	refBack: MutableRefObject<HTMLElement>
) => {
	const [modal, setModal] = useState<boolean>(false)
	const [modalOpened, setModalOpened] = useState<boolean>(false)

	useEffect(() => {
		const handleClick = (e: globalThis.MouseEvent) => {
			e.stopPropagation()
			const targetNode = e.target instanceof Node ? e.target : null
			if (
				// Модалка открыта
				(refModal.current &&
					(refButton.some(curBut =>
						curBut.current.contains(targetNode)
					) ||
						//клик вне модалки
						!refModal.current.contains(targetNode))) ||
				// Модалка закрыта
				(!refModal.current &&
					refButton?.some(cur => cur.current?.contains(targetNode)))
			) {
				setModal(prev => !prev)
			}
			if (refBtnRegistration.current.contains(targetNode)) {
				//при нажатии на кнопку зарегистрироваться
				setModalOpened(true)
			} else if (refBack.current.contains(targetNode)) {
				setModalOpened(false)
			}
		}

		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [refModal, refButton, refBtnRegistration, refBack])

	return { modal, setModal, modalOpened, setModalOpened }
}

export default useModal
