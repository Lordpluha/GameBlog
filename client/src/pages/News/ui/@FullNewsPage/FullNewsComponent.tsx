import { FC } from 'react'

import ContentText from './@Content/ContentText'
import ContentTop from './@Content/ContentTop'
import ContentWrapperBottom from './@Content/ContentWrapperBottom'
import NewsNavigation from './@NewNavigation/NewsNavigation'
import styles from './FullNews.module.scss'
import { IPublication } from '@model/interfaces'

type TFullNewsProps = {
	fullNewsData: IPublication
	otherNews: any
}

/**
 * Reused component for rendering full article, news or blog page
 * fullNewsData - full data when opening an article
 * @param title - title of news, then transmitted in component TopInfo
 * @param content - full text on article,
 * @param createdAt - date of publication of the article on the website,
 * @param views - visits of article then transmitted in component TopInfo,
 * @param comments - tottal count of comments then transmitted in component TopInfo,
 * @param author - short data of author article then transmitted in coponent UserShortData,
 * @param tags - tags data of article then transmitted in coponent Tags
 * otherNews - data for news navigation blocks (previous, next)
 */
const FullNewsComponent: FC<TFullNewsProps> = props => {
	const {
		title,
		content,
		createdAt,
		views,
		_count,
		author,
		tags
	} = props.fullNewsData

	return (
		<section className={styles.contentBody}>
			<div className={styles.contentWrapper}>
				<ContentTop
					title={title}
					createdAt={createdAt}
					views={views}
					comments={_count.comments}
					authorData={author}
				/>
				<ContentText fullText={content} />
				<ContentWrapperBottom authorData={author} tags={tags} />
			</div>
			<NewsNavigation {...props.otherNews} />
		</section>
	)
}

export default FullNewsComponent
