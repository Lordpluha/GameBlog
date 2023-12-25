import Filter from './Filter/Filter'

import styles from './FilterList.module.scss'

export interface IFilter {
	name: string
	to: string
}

type TFilterListProps = {
	filters: Array<IFilter>
}

const FilterList = ({ filters }: TFilterListProps) => {
	return (
		<section className={styles.filters}>
			<ul className={styles.filter_list}>
				{filters.map((el, i) => (
					<Filter key={i} to={el.to} name={el.name} list={true} />
				))}
			</ul>
		</section>
	)
}

export default FilterList
