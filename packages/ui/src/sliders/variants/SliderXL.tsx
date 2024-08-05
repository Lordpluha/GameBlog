'use client'

import type { FC } from 'react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import 'swiper/scss'

import clsx from 'clsx'
import type { TSliderProps } from '../@types/SliderProps.type'

const SliderXL: FC<Omit<TSliderProps, 'size'>> = ({
  posts,
  className,
  ...props
}) => {
  const swiperContainer = useRef<SwiperRef>(null!)

  return (
    <Swiper
      className={clsx('swiper-container swiper-pointer-events', className)}
      modules={[Navigation, A11y]}
      ref={swiperContainer}
      {...props}
    >
      <SwiperSlide>SliderXL1</SwiperSlide>
      <SwiperSlide>SliderXL2</SwiperSlide>
      <SwiperSlide>SliderXL3</SwiperSlide>
    </Swiper>
  )
}

export default SliderXL
