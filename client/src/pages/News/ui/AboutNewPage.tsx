import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import dfn from '@/data/demoData.json'

import { SliderReadAlso } from '@widgets/Sliders'

import { INewsNavigation } from '../model/@interfaces'
import FullNewsComponent from './@FullNewsPage/FullNewsComponent'
import { INew } from '@model/interfaces'

const AboutNewPage = () => {
	const [NewData, setNewData] = useState<INew>()
	const [otherNews, setOtherNews] = useState<INewsNavigation[]>([])
	const { slug } = useParams()

	useEffect(() => {
		const newsdata = dfn.newsData.filter(data => data.slug === slug)
		setNewData(newsdata[0] as INew)

		dfn.newsData.map(item => {
			setOtherNews(
				prev =>
					[
						...prev,
						{
							id: +item.id,
							category: item.category,
							description: item.title,
							date: +item.createdAt,
							image: item.preview,
							slug: item.slug,
							title: item.title
						}
					] as INewsNavigation[]
			)
		})
	}, [slug])

	if (!NewData || !otherNews) return <p>Loading...</p>

	return (
		<>
			<FullNewsComponent fullNewsData={NewData} otherNews={otherNews} />
			<SliderReadAlso />
		</>
	)
}

export default AboutNewPage
