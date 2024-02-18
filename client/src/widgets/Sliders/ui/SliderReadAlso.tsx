import { useEffect, useRef, useState } from 'react'

import sd from '@/data/demoData.json'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/scss'

import { ISlider } from '../model/@interfaces'
import ReadAlsoItem from './@ReadAlso/ReadAlsoItem'
import styles from './SliderReadAlso.module.scss'

/**
 * Reused component for rendering slider of latest news
 * This component can be used on the blog, news and other sections
 */
const SliderReadAlso = () => {
	const [sliderData, setSliderData] = useState<ISlider[]>([])
	const swiperContainer = useRef<SwiperRef>(null!)

	useEffect(() => {
		sd.newsData.map(item => {
			setSliderData(
				prev =>
					[
						...prev,
						{
							image: item.preview,
							slug: item.slug,
							createdAt: item.createdAt,
							author: item.author
						}
					] as ISlider[]
			)
		})
	}, [])

	return (
		<section className={clsx(styles.pageSection, styles.additionalReads)}>
			<div className={styles.additionalReadsHeader}>
				<p>Читай также</p>
				<div className={styles.additionalReadsControls}>
					<div
						className={styles.additionalReadsControlsPrev}
						onClick={() =>
							swiperContainer.current?.swiper.slidePrev()
						}
					>
						<ChevronLeft />
					</div>
					<div
						className={styles.additionalReadsControlsNext}
						onClick={() =>
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
				{sliderData?.map((post, idx) => (
					<SwiperSlide key={idx}>
						<ReadAlsoItem {...post} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default SliderReadAlso
