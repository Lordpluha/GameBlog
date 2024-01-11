import { TCategory } from '@type/Category.type'

export interface IArticle {
	id: number
	seo: string
	title: string
	image: string
	tags: TCategory[]
	releaseDate: number
	commentsNum: number
}
