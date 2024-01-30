import { useLocation, useMatches } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'
import Crumb from './Crumb'
/**
 * Reused component of breadcrambs
 */
type TCrumbs = {
  path: string
  title: string
}[]

const Breadcrumbs = () => {
  const location = useLocation()
  const crumbs:TCrumbs = [{
    path:'',
    title:''
  }]

  const matches = location.pathname.split('/')

  matches.map((crumb, idx) => {
      crumbs[idx] = {
        path: crumb === ''? '/' : crumbs[idx-1].path+'/'+crumb,
        title: crumb === ''? 'Home' : crumb
      }
  })
console.log(crumbs);

  return (
    <div className={styles.breadcrumbs}>
      <ol>
        {crumbs.map((crumb, idx) => 
          <div>
            {idx > 0 && <div className=''> / </div>}
            <Crumb path={crumb.path} title={crumb.title} />
          </div>
        )}
      </ol>
    </div>
  )
}

export default Breadcrumbs