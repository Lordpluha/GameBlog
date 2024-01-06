import { useLocation } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'
/**
 * Reused component of breadcrambs
 */
const Breadcrumbs = () => {
  const history = useLocation()
  
  return (
    <div className={styles.breadcrumbs}>Главная / Новости</div>
  )
}

export default Breadcrumbs