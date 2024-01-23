import { Feather } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './readalso.module.scss'
import { ISlider } from '@/components/interfaces/Slider.interface'
import { FC } from 'react'

const ReadAldoItem:FC<ISlider> = ({category, description, image, seo}) => {
  return (
    <Link className={styles.card} to={`/newsdata/${seo}`}>
        <img className={styles.cardImage} src={image} alt={description} />
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