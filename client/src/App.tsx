import { BrowserRouter } from "react-router-dom"
import ArticleList from "./components/ui/Article/ArticleList/ArticleList"

function App() {
	return (
		<>
			<h1>GameBlog</h1>
			<BrowserRouter>
				<ArticleList articleList={articleList} />
			</BrowserRouter>
		</>
	)
}

export default App
