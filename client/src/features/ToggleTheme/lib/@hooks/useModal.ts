import {
	MouseEvent,
	type MutableRefObject,
	useCallback,
	useEffect,
	useState
} from 'react'

import { TTheme } from '@features/ToggleTheme/model'

import useTheme from './useTheme'

/**
 * Hook for close the window when clicked outside the component
 *
 * @param refModal - reference to the modal DOM
 */
const useModal = (
	refModal: MutableRefObject<HTMLElement>,
	refButton: MutableRefObject<HTMLElement>[],
	refBtnTheme: MutableRefObject<HTMLElement>[]
) => {
	const [modal, setModal] = useState<boolean>(false)
	const { theme, setTheme } = useTheme()

	const switchTheme = (val: TTheme) => {
		setTheme(val)
		setModal(false)
	}

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
			} else if (
				refBtnTheme?.some(cur => cur.current?.contains(targetNode))
			) {
				switchTheme('dark')
			} else {
				switchTheme('light')
			}
		}

		document.addEventListener('click', handleClick, true)

		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [refModal, refButton, refBtnTheme])

	return { modal, setModal, theme, setTheme }
}

export default useModal
