export type TServerResponse<T> = {
	count: number
	pageCount: number
	items: T[]
}
