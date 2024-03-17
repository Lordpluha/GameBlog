import { type FC, type PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface CoverProps {
	src?: string
	alt?: string
	linkTo?: string
	height?: string
	width?: string
}

const CoverWrapper: FC<Pick<CoverProps, 'linkTo'> & PropsWithChildren> = ({
	linkTo,
	children
}) => <>{linkTo ? <Link to={linkTo}>{children}</Link> : <>{children}</>}</>

const Cover: FC<CoverProps> = props => (
	<CoverWrapper linkTo={props.linkTo}>
		<img
			className='object-cover hover:scale-110 duration-500'
			src={props.src ?? ''}
			alt={props.alt ?? ''}
			style={{
				height: props.height ?? 'auto',
				width: props.width ?? 'auto'
			}}
		/>
	</CoverWrapper>
)

export default Cover
