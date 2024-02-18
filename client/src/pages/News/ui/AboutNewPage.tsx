import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { SliderReadAlso } from '@widgets/Sliders'

import { INewsNavigation } from '../model/@interfaces'
import FullNewsComponent from './@FullNewsPage/FullNewsComponent'
import { useGetNewsBySlugQuery } from '@store/@api/NewsApi'

const AboutNewPage = () => {
	const [otherNews, setOtherNews] = useState<INewsNavigation[]>([])
	const {slug} = useParams()
	const {data} = useGetNewsBySlugQuery(slug)

	if (!data || !otherNews) return <p>Loading...</p>

	return (
		<>
			<FullNewsComponent fullNewsData={data} otherNews={otherNews} />
			<SliderReadAlso />
		</>
	)
}

export default AboutNewPage
