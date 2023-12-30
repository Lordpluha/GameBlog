import { useEffect } from 'react'

/**
 * hook for close the window when clicked outside the component
 * @param refModal - reference to the modal DOM
 * @param setOpenCom - state of a modal window that closes the window when clicked outside the component
 */
export const useOnClickOutsideRef = (refModal:{current:null}, setState:(val:boolean) => void) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (refModal.current && !refModal.current.contains(e.target as Node)) {
                setState(false)
            }
          };
      
          document.addEventListener("click", handleClick, true);
      
          return () => {
            document.removeEventListener("click", handleClick, true);
          };
    }, [refModal])
}