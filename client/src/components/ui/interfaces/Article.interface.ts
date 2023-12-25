import { ICategory } from './Category.interface'

export interface IArticle {
	id: number
	seo: string
	title: string
	image: string
	category: ICategory[]
	releaseDate: number
	commentsNum: number
}
