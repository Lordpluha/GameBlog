import { TTag } from '@type/Tag.type'

import styles from '../SearchModal.module.scss'

/**
 * Component with tags for search form popup
 * @param tags array of tags type of TTag[]
 */
const SearchTags = ({ tags }: { tags: TTag[] }) => {
	return (
		<ul className='flex gap-3 text-[16px] flex-wrap px-4'>
			{tags.map((tag, idx) => (
				<li key={idx} className={styles.searchFormTags}>
					<span>{tag.name}</span>
				</li>
			))}
		</ul>
	)
}

export default SearchTags
