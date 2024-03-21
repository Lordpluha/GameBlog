import { FC, useEffect, useState } from 'react'

import { IPublication } from '@model/interfaces'

import { useGetArtCommentsQuery, useGetNewsByIdQuery } from '@store/index'

import { INewsNavigation } from '../../model/@interfaces'

import ContentText from './@Content/ContentText'
import ContentTop from './@Content/ContentTop'
import ContentWrapperBottom from './@Content/ContentWrapperBottom'
import NewsNavigation from './@NewNavigation/NewsNavigation'
import styles from './FullNews.module.scss'

const FullNewsComponent: FC<{
	currentNew: IPublication
}> = ({ currentNew }) => {
	const [otherNews, setOtherNews] = useState<IPublication[]>([])

	const { views, _count, author, tags, id, title, content, createdAt } =
		currentNew

	const { data: prevPost, isLoading: isLoadingPrev } = useGetNewsByIdQuery(
		id - 1
	)
	const { data: nextPost, isLoading: isLoadingNext } = useGetNewsByIdQuery(
		id + 1
	)

	useEffect(() => {
		setOtherNews([prevPost!, nextPost!])
	}, [prevPost, nextPost])

	return (
		<section className={styles.contentBody}>
			<div className={styles.contentWrapper}>
				<ContentTop
					title={title}
					createdAt={createdAt}
					views={views}
					comments={_count?.comments || 0}
					authorData={author}
				/>
				<ContentText fullText={content} />
				<ContentWrapperBottom authorData={author} tags={tags} />
			</div>
			{/* {!isLoadingPrev && !isLoadingNext && <NewsNavigation />} */}
		</section>
	)
}

export default FullNewsComponent
