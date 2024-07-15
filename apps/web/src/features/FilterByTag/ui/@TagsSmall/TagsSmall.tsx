import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { TTagsProps } from '../../model/@types'
import styles from './TagsSmall.module.scss'

const TagsSmall: FC<TTagsProps> = ({ tags }) => {
  return (
    <section className={styles.filters}>
      <ul className={styles.filter_list}>
        {tags.map((tag, i) => (
          <li key={i} />
        ))}
      </ul>
    </section>
  )
}

export default TagsSmall
