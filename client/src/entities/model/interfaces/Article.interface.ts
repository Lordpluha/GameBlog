import { ICategory } from './Category.interface'

export interface IArticle {
	id: number
	seo: string
	title: string
	image: string
	categories: ICategory[]
	releaseDate: number
	commentsNum: number
}
