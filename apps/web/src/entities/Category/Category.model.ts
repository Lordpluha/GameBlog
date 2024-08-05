/* General type for all categories*/
interface ICategory {
  readonly title: string
  readonly url: string
  readonly subcategory: ICategory | null
}

export type { ICategory }
