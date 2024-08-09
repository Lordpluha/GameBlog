'use client'

import type { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Pagination } from 'swiper/modules'
import type { TSliderProps } from '../@types/SliderProps.type'
import 'swiper/css';
import 'swiper/css/pagination';
import { PaginationOptions } from 'swiper/types'

const SliderXL: FC<Omit<TSliderProps, 'size'>> = ({
  slides,
  className,
  ...props
}) => {
  const pagination: PaginationOptions  = {
    clickable: true,
    renderBullet: function (index, classes) {
      return '<span class="' + classes + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, A11y]}
        className="mySwiper"
				{...props}
      >
				{slides.length !== 0
					? slides.map((el, idx) => <SwiperSlide key={idx}>{el}</SwiperSlide>)
					: <>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
					</>}
      </Swiper>
    </>
  );
}

export default SliderXL
