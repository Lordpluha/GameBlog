import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetNewsBySlugQuery } from '@store/index'

import { SliderReadAlso } from '@widgets/Sliders'

import { INewsNavigation } from '../../../../widgets/FullNewsPage/model/@interfaces'
import FullNewsComponent from '../../../../widgets/FullNewsPage/ui/FullNewsComponent'

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
