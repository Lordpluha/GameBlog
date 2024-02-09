import { FC } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'

import { dateConverter } from '@shared/lib'

import { INewsNavigation } from '../../../../model/@interfaces'
import styles from './../NewsNavigation.module.scss'

const NextNews: FC<INewsNavigation> = nextNews => {
	return (
		<div className={styles.otherNewsBlock}>
			<Link
				to={`/newsdata/${nextNews.seo}`}
				className={clsx(
					styles.newsNavigationLink,
					styles.newsNavigationLinkNext
				)}
			>
				<p className={styles.newsNavigationText}>
					Следующая <ChevronRight />
				</p>
				<div className={styles.newsNavigationBlock}>
					<img
						className={styles.newsNavigationImage}
						src={nextNews.image}
					/>
					<p className={styles.newsNavigationDate}>
						{dateConverter(nextNews.date)}
					</p>
					<p className={styles.newsNavigationTitle}>
						{nextNews.description}
					</p>
				</div>
			</Link>
		</div>
	)
}

export default NextNews
