import Filter from "./Filter/Filter"

import styles from "./Filter.module.scss"

function Filterlist(props) {
    return (
        <section className={styles.filters}>
            <ul className={styles.filter_list}>
                {props.names.map((el, i) => <Filter key={i} name={el.name} />)}
            </ul >
        </section >
    )
}

export default Filterlist