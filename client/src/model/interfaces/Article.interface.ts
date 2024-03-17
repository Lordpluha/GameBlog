import type ICategory from './Category.interface'

interface IArticle {
	id: number
	seo: string
	title: string
	image: string
	categories: ICategory[]
	releaseDate: number
	commentsNum: number
}

export default IArticle
