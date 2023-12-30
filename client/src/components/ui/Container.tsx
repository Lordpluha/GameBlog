import { PropsWithChildren } from 'react'

export type TContainerProps = PropsWithChildren

/** Basic layout container component */
export const Container = ({ children }: TContainerProps) => {
	return <div className='max-w-screen-xl'>{children}</div>
}
