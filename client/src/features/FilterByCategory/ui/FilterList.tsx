import Filter from './@FilterItem/FilterItem'
import styles from './FilterList.module.scss'

export interface TFilter {
	name: string
	to: string
}

const FilterList = ({ filters }: { filters: TFilter[] }) => {
	return (
		<section className={styles.filters}>
			<ul className={styles.filter_list}>
				{filters.map((el, i) => (
					<li key={i}>
						<Filter to={el.to} name={el.name} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default FilterList
