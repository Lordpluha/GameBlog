import styles from "../Filter.module.scss"
function Filter( props) {
    return (
        <li class>
            <a className={styles.filter} href="#" >{props.name}</a>
        </li>
    )
}
export default Filter