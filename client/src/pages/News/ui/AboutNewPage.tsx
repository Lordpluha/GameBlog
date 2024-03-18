import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetNewsBySlugQuery } from '@store/@api/NewsApi'

import { SliderReadAlso } from '@widgets/Sliders'

import { INewsNavigation } from '../model/@interfaces'
import FullNewsComponent from './@FullNewsPage/FullNewsComponent'

const AboutNewPage = () => {
	const { slug } = useParams()
	const { data } = useGetNewsBySlugQuery(slug!)

	if (!data) return <p>Loading...</p>

	return (
		<>
			<FullNewsComponent currentNew={data} />
			<SliderReadAlso currentPost={data} />
		</>
	)
}

export default AboutNewPage
