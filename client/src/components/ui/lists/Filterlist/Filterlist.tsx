import Filter from './Filter/Filter'
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
					<Filter key={i} to={el.to} name={el.name} isList={true} />
				))}
			</ul>
		</section>
	)
}

export default FilterList
