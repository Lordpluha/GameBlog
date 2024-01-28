import { FC } from 'react'
import { Link, To } from 'react-router-dom'

import styles from './Filter.module.scss'

/** Describes data to provide to the Filter component */
export interface IFilter {
	name: string
	to: To
}

const Filter: FC<IFilter> = ({ name, to }) => {
	return (
		<Link to={to}>
			<span className={styles.filter}>{name}</span>
		</Link>
	)
}

export default Filter
