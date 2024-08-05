import type { FC } from 'react'
import clsx from 'clsx'
import type { TSliderProps } from './@types/SliderProps.type'
import SliderVariants from './variants'
import ESliderSizes from './@types/SliderSizes.enum'
// import styles from './Slider.module.scss'

const Slider: FC<TSliderProps> = ({ size, className, ...props }) => {
  const SliderSized = SliderVariants[`Slider${ESliderSizes[size]}`]
  return (
    <SliderSized
      className={className}
      {...props}
    />
  )
}

export default Slider
