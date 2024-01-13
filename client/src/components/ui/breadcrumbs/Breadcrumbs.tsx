import { useLocation } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'
import Crumb from './Crumb'
/**
 * Reused component of breadcrambs
 */
const Breadcrumbs = () => {
  const location = useLocation()
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')
  console.log(crumbs);
  
  return (
    <div className={styles.breadcrumbs}>
      {crumbs.map(crumb => <Crumb crumb={crumb} key={crumb} />)
      }
    </div>
  )
}

export default Breadcrumbs