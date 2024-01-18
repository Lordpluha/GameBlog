import { useMatches } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'

/**
 * Reused component of breadcrambs
 */
const Breadcrumbs = () => {
  const matches = useMatches()
  return (
    <div className={styles.breadcrumbs}>
      <ol>
        Главная / Новости
      </ol>
    </div>
  )
}

export default Breadcrumbs