import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react';
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import ReadAldoItem from './readAlso/ReadAldoItem'
import { ISlider } from '@/components/interfaces/Slider.interface';
import sd from '../../../demoData/demoFullNews.json'

import styles from './slider.module.scss'
import 'swiper/scss';
/**
 * Reused component for rendering slider of latest news
 * This component can be used on the blog, news and other sections
 */
const SliderReadAlso = () => {
  const [sliderData, setSliderData] = useState<ISlider[]>([])
  const swiperContainer = useRef<SwiperRef>()

  useEffect(() => {
    sd.newsData.map(item => {
      setSliderData(prev => [...prev,
        {
          category: item.category,
          description: item.title,
          image: item.imageNews,
          seo: item.seo,
          date: item.publishedDate
        }
      ] as ISlider[])
    })
  }, [])

  return (
    <section className={clsx(styles.pageSection, styles.additionalReads)}>
        <div className={styles.additionalReadsHeader}>
            <p>Читай также</p>
            <div className={styles.additionalReadsControls}>
                <div 
                    className={styles.additionalReadsControlsPrev} 
                    onClick={() => swiperContainer.current?.swiper.slidePrev()}
                >
                    <ChevronLeft />
                </div>
                <div 
                    className={styles.additionalReadsControlsNext} 
                    onClick={() => swiperContainer.current?.swiper.slideNext()}
                >
                    <ChevronRight />
                </div>
            </div>
        </div>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation, A11y]}
            className="swiper-container swiper-pointer-events"
            ref={swiperContainer}
        >
            {sliderData?.map(post => <SwiperSlide key={post.seo}><ReadAldoItem {...post} /></SwiperSlide>)}
        </Swiper>            
    </section>
  )
}

export default SliderReadAlso