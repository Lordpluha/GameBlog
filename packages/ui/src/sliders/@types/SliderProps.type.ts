import type { SwiperProps } from 'swiper/react'
import type ESliderSizes from './SliderSizes.enum'
import { ReactNode } from 'react'

type TSliderProps = {
  slides: ReactNode[]
  size: keyof typeof ESliderSizes
} & SwiperProps

export type { TSliderProps }
