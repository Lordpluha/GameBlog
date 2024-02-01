import { ITag } from '@model/interfaces'

import styles from '../SearchModal.module.scss'

/**
 * Component with tags for search form popup
 * @param tags array of tags type of TTag[]
 */
const SearchTags = ({ tags }: { tags: ITag[] }) => {
	return (
		<ul className='flex gap-3 text-[16px] flex-wrap'>
			{tags.map((tag, idx) => (
				<li key={idx} className={styles.searchFormTags}>
					<span>{tag.name}</span>
				</li>
			))}
		</ul>
	)
}

export default SearchTags
