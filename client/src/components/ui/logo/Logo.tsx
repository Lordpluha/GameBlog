import { Link } from 'react-router-dom'
import styles from './logo.module.scss'

/**
 * Logo component
 * included image or text for logo app
 */
const Logo = () => {
  return (
    <Link className={styles.headerLogo} to="/">
        <h3>GameBlog</h3>
    </Link>
  )
}

export default Logo