import { useEffect } from 'react'

type TUseOnClickOutside = (
  refModal:any,
  setState:(val:boolean) => void
) => void

/**
 * hook for close the window when clicked outside the component
 * @param refModal - reference to the modal DOM
 * @param setOpenCom - state of a modal window that closes the window when clicked outside the component
 */

export const useOnClickOutsideRef:TUseOnClickOutside = (refModal, setState) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (refModal.current && !refModal.current.contains(e.target)) {
                setState(false)
            }
          };
      
          document.addEventListener("click", handleClick, true);
      
          return () => {
            document.removeEventListener("click", handleClick, true);
          };
    }, [refModal])
}