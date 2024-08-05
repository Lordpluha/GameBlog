export interface TServerResponse<T> {
  count: number
  pageCount: number
  items: T[]
}
