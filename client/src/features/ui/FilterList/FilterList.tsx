import Filter from '@shared/ui/FilterItem/FilterItem'

import styles from './FilterList.module.scss'

export type TFilter = {
	name: string
	to: string
}

const FilterList = ({ filters }: { filters: Array<TFilter> }) => {
	return (
		<section className={styles.filters}>
			<ul className={styles.filter_list}>
				{filters.map((el, i) => (
					<li>
						<Filter key={i} to={el.to} name={el.name} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default FilterList
