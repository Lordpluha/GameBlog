import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Feather } from 'lucide-react'

import { IPublication } from '@model/interfaces'

import { ISlider } from '../../model/@interfaces'
import styles from './ReadAlso.module.scss'

const ReadAlsoItem: FC<ISlider> = (post: IPublication) => {
	const { slug, preview, title, categories } = post
	return (
		<Link className={styles.card} to={`/news/${slug}`}>
			<img className={styles.cardImage} src={preview} alt={title} />
			<section className={styles.cardTop}>
				<section className={styles.cardSection}>
					<Feather /> <span>{categories[0].title}</span>
				</section>
			</section>
			<section className={styles.cardBottom}>
				<div>
					<span className={styles.cardTitle}>{title}</span>
				</div>
			</section>
		</Link>
	)
}

export default ReadAlsoItem
