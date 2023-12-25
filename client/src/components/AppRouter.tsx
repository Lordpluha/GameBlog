import { Route, Routes } from 'react-router-dom'
import Layout from '../routes/Layout'
import BlogsPage from '../pages/BlogsPage'
import CheatsPage from '../pages/CheatsPage'
import GamesPage from '../pages/GamesPage'
import NewsPage from '../pages/NewsPage'
import ReadPage from '../pages/ReadPage'
import StreamsPage from '../pages/StreamsPage'
import SupportPage from '../pages/SupportPage'
import WatchPage from '../pages/WatchPage'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='blogs' element={<BlogsPage />} />
            <Route path='cheats' element={<CheatsPage />} />
            <Route path='games' element={<GamesPage />} />
            <Route path='news' element={<NewsPage />} />
            <Route path='read' element={<ReadPage />} />
            <Route path='streams' element={<StreamsPage />} />
            <Route path='support' element={<SupportPage />} />
            <Route path='watch' element={<WatchPage />} />
        </Route>
    </Routes>
  )
}

export default index