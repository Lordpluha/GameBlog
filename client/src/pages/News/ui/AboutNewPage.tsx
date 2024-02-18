import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//import { IPublication } from '@model/interfaces'

import { SliderReadAlso } from '@widgets/Sliders'

import { INewsNavigation } from '../model/@interfaces'
import FullNewsComponent from './@FullNewsPage/FullNewsComponent'
import { useGetNewsWithSlugQuery } from '@store/@api/NewsApi'

const AboutNewPage = () => {
	//const [NewData, setNewData] = useState<IPublication>()
	const [otherNews, setOtherNews] = useState<INewsNavigation[]>([])
	const {slug} = useParams<string>()
	const {isError, isLoading, data} = useGetNewsWithSlugQuery(slug)

	// useEffect(() => {
	// 	setNewData(data)
	// }, [])

	if (!data || !otherNews) return <p>Loading...</p>

	return (
		<>
			<FullNewsComponent fullNewsData={data} otherNews={otherNews} />
			<SliderReadAlso />
		</>
	)
}

export default AboutNewPage
