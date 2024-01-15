export interface INews {
	id: number
	preview: string
	content: string
	slug: string
	createdAt: number
	updatedAt: number
	categorie: string
	commentsCount: number
	user: {
		name: string
		avatar: string
	}
}
