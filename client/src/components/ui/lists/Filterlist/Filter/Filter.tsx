import { ReactNode } from 'react'
import { To, Link } from 'react-router-dom'
import styles from './Filter.module.scss'

/** Wrapper for Filter component */
const FilterWrapper = ({
	wrapToLi = false,
	children
}: {
	wrapToLi?: boolean
	children: ReactNode
}) => (wrapToLi ? <li>{children}</li> : <div>{children}</div>)

/** Describes data to provide to the Filter component */
export interface IFilter {
	name: string
	to: To
}

/** Describes all props for Filter component */
type TFilterProps = {
	/** use <li></li> wrapper? */
	list: boolean
} & IFilter

const Filter = ({ name, to, list = false }: TFilterProps): ReactNode => {
	return (
		<FilterWrapper wrapToLi={list}>
			{/* BUG with Link component */}
			<Link to={to}>
				<span className={styles.filter}>{name}</span>
			</Link>
		</FilterWrapper>
	)
}

export default Filter
