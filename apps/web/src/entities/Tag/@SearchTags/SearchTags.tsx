import { type ITag } from '@model/interfaces'
import styles from '../SearchModal.module.scss'

/**
 * Component with tags for search form popup
 * @param tags array of tags type of TTag[]
 */
function SearchTags({ tags }: { tags: ITag[] }) {
  return (
    <ul className='flex flex-wrap gap-3 px-4 text-[16px]'>
      {tags.map((tag, idx) => (
        <li
          className={styles.searchFormTags}
          key={idx}
        >
          <span>{tag.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default SearchTags
