import { useState } from 'react'
import { SliderReadAlso } from '@widgets/Sliders'
import { INewsNavigation } from '@widgets/FullNewsPage/model/@interfaces'
import FullNewsComponent from '@widgets/FullNewsPage/ui/FullNewsComponent'

function AboutNewPage() {
  // const { data } = useGetNewsBySlugQuery(slug!)

  // if (!data) return <p>Loading...</p>

  return (
    <>
      <h1>About new id page</h1>
      {/* <FullNewsComponent currentNew={data} /> */}
      {/* <SliderReadAlso currentPost={data} /> */}
    </>
  )
}

export default AboutNewPage
