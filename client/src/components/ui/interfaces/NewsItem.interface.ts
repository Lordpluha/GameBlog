export interface INewsItem {
	id: number
	preview: string
	content: string
	slug: string
	createdAt: string
	updatedAt: string
	categorie: string
	commentsCount: number
	user: {
		name: string
		avatar: string
	}
}
