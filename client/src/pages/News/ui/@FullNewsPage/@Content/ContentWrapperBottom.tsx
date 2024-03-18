import { FC } from 'react'

import { ITag, IUser } from '@model/interfaces'

import { TagsSmall } from '@features/FilterByTag'

import { Author } from '@entities/Author'

import styles from './../FullNews.module.scss'

type TContentWrapperProps = {
	authorData: IUser
	tags: ITag[]
}

/**
 * Component for rendering tags of article, news or blog page
 * @param authorData - short data of author article then transmitted in coponent UserShortData,
 * @param tags - tags data of article then transmitted in coponent Tags
 * otherNews - data for news navigation blocks (previous, next)
 */
const ContentWrapperBottom: FC<TContentWrapperProps> = ({
	authorData,
	tags
}) => {
	return (
		<div className={styles.contentWrapperBottom}>
			<Author {...authorData} />
			<TagsSmall tags={tags} />
		</div>
	)
}

export default ContentWrapperBottom
