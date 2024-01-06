import { Feather } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './readalso.module.scss'
import { ISliderInterface } from '@/components/interfaces/Slider.interface'

const ReadAldoItem = ({category, description, image, seo}:ISliderInterface) => {
  return (
    <Link className={styles.card} to={`/newsdata/${seo}`}>
        <picture>
            <img src={image} alt={description} />
        </picture>
        <section className={styles.cardTop}>
            <section className={styles.cardSection}>
                <Feather /> <span>{category}</span>
            </section>
        </section>
        <section className={styles.cardBottom}>
            <div>
                <span className={styles.cardTitle}>{description}</span>
            </div>
        </section>
    </Link>
  )
}

export default ReadAldoItem