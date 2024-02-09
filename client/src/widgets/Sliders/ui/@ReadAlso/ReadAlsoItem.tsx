import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Feather } from 'lucide-react'

import { ISlider } from '../../model/@interfaces'
import styles from './ReadAlso.module.scss'

const ReadAlsoItem: FC<ISlider> = ({ category, description, image, seo }) => {
	return (
		<Link className={styles.card} to={`/newsdata/${seo}`}>
			<img className={styles.cardImage} src={image} alt={description} />
			<section className={styles.cardTop}>
				<section className={styles.cardSection}>
					<Feather /> <span>{category}</span>
				</section>
			</section>
			<section className={styles.cardBottom}>
				<div>
					<span className={styles.cardTitle}>{description}</span>
				</div>
			</section>
		</Link>
	)
}

export default ReadAlsoItem
