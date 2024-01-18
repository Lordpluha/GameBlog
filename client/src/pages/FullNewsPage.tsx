import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FullNewsComponent from "@/components/ui/fullNewsPage/FullNewsComponent"
//import SliderReadAlso from "@/components/ui/sliders/SliderReadAlso"
import dfn from '../demoData/demoFullNews.json'
import { IFullNewsInterface } from "@/components/interfaces/FullNews.interface"
//import { IOtherNewsNavigation } from "@/components/interfaces/OtherNewsNavigation.interface"

const FullNewsPage = () => {
  const [fullNewsData, setFullNewsData] = useState<IFullNewsInterface>()
  //const [otherNews, setOtherNews] = useState<IOtherNewsNavigation[]>([])
  
  const {seo} = useParams()
  
  useEffect(() => {
    const newsdata = dfn.newsData.filter(data => data.seo === seo)
    setFullNewsData(newsdata)

    // dfn.newsData.map(item => {
    //   setOtherNews(prev => [...prev,
    //     {
    //       id: +item.articleId,
    //       category: item.category,
    //       description: item.title,
    //       date: +item.publishedDate,
    //       image: item.imageNews,
    //       seo: item.seo,
    //       title: item.title
    //     }
    //   ])
    // })
  }, [])
  console.log(fullNewsData);
  return (
    <>
        <FullNewsComponent {...fullNewsData} />
        {/* <SliderReadAlso /> */}
    </>
  )
}

export default FullNewsPage