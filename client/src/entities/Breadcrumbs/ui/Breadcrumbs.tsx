import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import { v4 } from 'uuid'

import Crumb from './@Crumb/Crumb'
import styles from './Breadcrumbs.module.scss'

type TCrumbs = {
	url: string
	title: string
}[]

/* The code defines a functional component called `Breadcrumbs`.
 * TCrumbs - the type of array objects crumb {url: '', title: ''}
 */
const Breadcrumbs = () => {
	const location = useLocation()
	const crumbs: TCrumbs = [
		{
			url: '',
			title: ''
		}
	]

	location.pathname.split('/').map((crumb, idx) => {
		if (idx === 0) crumbs[idx] = { url: '/', title: 'Home' }
		if (idx === 1) crumbs[idx] = { url: crumb, title: crumb }
		if (idx > 1)
			crumbs[idx] = {
				url: crumbs[idx - 1].title + '/' + crumb,
				title: crumb
			}
	})

	return (
		<div className={styles.breadcrumbs}>
			<ol className={styles.breadcrumbsList}>
				{crumbs.map((crumb, idx) => (
					<Fragment key={v4()}>
						{idx >= 1 && <div> / </div>}
						<Crumb
							url={crumb.url}
							title={crumb.title}
							className={styles.crumbs}
						/>
					</Fragment>
				))}
			</ol>
		</div>
	)
}

export default Breadcrumbs
