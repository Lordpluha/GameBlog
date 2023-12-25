import { ICategory } from '../interfaces/Category.interface'

export type TArticleData = {
	id: number
	seo: string
	title: string
	image: string
	category: ICategory[]
	releaseDate: number
	commentsNum: number
}
