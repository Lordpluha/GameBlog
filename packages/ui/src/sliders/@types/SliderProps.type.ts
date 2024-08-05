import type { SwiperProps } from 'swiper/react'
import type IPostModel from "gameblog-web/src/entities/Post/models/Post.model"
import type ESliderSizes from './SliderSizes.enum'

type TSliderProps = {
  posts: IPostModel
  size: keyof typeof ESliderSizes
} & SwiperProps

export type { TSliderProps }
