'use client'

import type { FC } from 'react'
import { useRef } from 'react'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import type { TSliderProps } from '../@types/SliderProps.type'

/**
 * Reused component for rendering slider of latest news
 * This component can be used on the blog, news and other sections
 */
const SliderXS: FC<Omit<TSliderProps, 'size'>> = ({
  posts,
  className,
  ...props
}) => {
  const swiperContainer = useRef<SwiperRef>(null)

  return (
    <section className={clsx('', className)}>
      <div className=''>
        <p>Читай также</p>
        <div className=''>
          <div
            className=''
            onMouseDown={() => swiperContainer.current?.swiper.slidePrev()}
          >
            <ChevronLeft />
          </div>
          <div
            className=''
            onMouseDown={() => swiperContainer.current?.swiper.slideNext()}
          >
            <ChevronRight />
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          250: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1140: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        className='swiper-container swiper-pointer-events'
        modules={[Navigation, A11y]}
        ref={swiperContainer}
        slidesPerView={4}
        spaceBetween={30}
        {...props}
      >
        <SwiperSlide>SliderXL1</SwiperSlide>
        <SwiperSlide>SliderXL2</SwiperSlide>
        <SwiperSlide>SliderXL3</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SliderXS
