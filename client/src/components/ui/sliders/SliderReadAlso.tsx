import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { useRef } from 'react';
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import ReadAldoItem from './readAlso/ReadAldoItem'
import { ISliderInterface } from '@/components/interfaces/Slider.interface';

import styles from './slider.module.scss'
import 'swiper/scss';
/**
 * Reused component for rendering slider of latest news
 * This component can be used on the blog, news and other sections
 */
const SliderReadAlso = (sladerData:ISliderInterface[]) => {
  const swiperContainer = useRef<SwiperRef>()
  return (
    <section className={clsx(styles.pageSection, styles.additionalReads)}>
        <div className={styles.additionalReadsHeader}>
            <span>Читай также</span>
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
            {sladerData?.map(post => <SwiperSlide key={post.seo}><ReadAldoItem {...post} /></SwiperSlide>)}
        </Swiper>            
    </section>
  )
}

export default SliderReadAlso