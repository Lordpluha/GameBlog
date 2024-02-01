import { useLocation } from 'react-router-dom'
import styles from './breadcrumbs.module.scss'
import Crumb from './Crumb'

type TCrumbs = {
  path: string
  title: string
}[]

/* The code defines a functional component called `Breadcrumbs`.
* TCrumbs - the type of array objects crumb {path: '', title: ''}
*/
const Breadcrumbs = () => {
  const location = useLocation()
  const crumbs:TCrumbs = [{
    path:'',
    title:''
  }]

  location.pathname.split('/').map((crumb, idx) => {
    if(idx === 0) crumbs[idx] = {path: '/', title: 'Home'}
    if(idx === 1) crumbs[idx] = {path: crumb, title: crumb}
    if(idx > 1) crumbs[idx] = {path: crumbs[idx-1].title+'/'+crumb, title:crumb}
  })

  return (
    <div className={styles.breadcrumbs}>
      <ol className='flex flex-row gap-x-2 items-center'>
        {crumbs.map((crumb, idx) => 
          <>
            {idx >= 1 && <div> / </div>}
            <Crumb path={crumb.path} title={crumb.title} key={crumb.title} />
          </>
        )}
      </ol>
    </div>
  )
}

export default Breadcrumbs