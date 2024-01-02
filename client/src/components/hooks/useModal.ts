import { MutableRefObject, useEffect, useState } from 'react'

/**
 * hook for close the window when clicked outside the component
 * @param refModal - reference to the modal DOM
 * @param setOpenCom - state of a modal window that closes the window when clicked outside the component
 */

const useModal = (refModal:MutableRefObject<HTMLElement>) => {
    const [modal, setModal] = useState<boolean>(false)
    useEffect(() => {
        const handleClick = (e: globalThis.MouseEvent) => {
            if (refModal.current && !refModal.current.contains(e.target as Node)) {
              setModal(false)
            }
          };
      
          document.addEventListener("click", handleClick);
      
          return () => {
            document.removeEventListener("click", handleClick);
          };
    }, [refModal])

    return {modal, setModal}
}

export default useModal