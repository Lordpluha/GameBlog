import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/scss'

import { IPublication } from '@model/interfaces'

import { useGetNewsByPopularityQuery } from '@store/index'

import { ISlider } from '../model/@interfaces'
import ReadAlsoItem from './@ReadAlso/ReadAlsoItem'
import styles from './SliderReadAlso.module.scss'

/**
 * Reused component for rendering slider of latest news
 * This component can be used on the blog, news and other sections
 */
const SliderReadAlso = ({ currentPost }: { currentPost: IPublication }) => {
	const swiperContainer = useRef<SwiperRef>(null!)

	const {
		data: posts,
		isLoading,
		isError,
		error
	} = useGetNewsByPopularityQuery(15)

	if (isLoading) return <h1>Loading ...</h1>
	if (isError) {
		if ('status' in error) {
			const errMsg =
				'error' in error ? error.error : JSON.stringify(error.data)

			return (
				<div>
					<div>An error has occurred:</div>
					<div>{errMsg}</div>
				</div>
			)
		} else {
			return <div>{error.message}</div>
		}
	}

	return (
		<section className={clsx(styles.pageSection, styles.additionalReads)}>
			<div className={styles.additionalReadsHeader}>
				<p>Читай также</p>
				<div className={styles.additionalReadsControls}>
					<div
						className={styles.additionalReadsControlsPrev}
						onMouseDown={() =>
							swiperContainer.current?.swiper.slidePrev()
						}
					>
						<ChevronLeft />
					</div>
					<div
						className={styles.additionalReadsControlsNext}
						onMouseDown={() =>
							swiperContainer.current?.swiper.slideNext()
						}
					>
						<ChevronRight />
					</div>
				</div>
			</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				modules={[Navigation, A11y]}
				className='swiper-container swiper-pointer-events'
				ref={swiperContainer}
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
			>
				{posts?.items.map((post, idx) => (
					<SwiperSlide key={idx}>
						<ReadAlsoItem {...post} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default SliderReadAlso
