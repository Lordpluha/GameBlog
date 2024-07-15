/* General type for all categories*/
interface TCategory {
  readonly title: string
  readonly url: string
  readonly subcategory: TCategory | null
}

// Читать
interface IReadCategory extends TCategory {
  title: 'read'
  subcategory: IReadArticleSubCategory | IReadBlogSubCategory
}

// Статьи
interface IReadArticleSubCategory extends TCategory {
  title: 'article'
}

// Блоги
interface IReadBlogSubCategory extends TCategory {
  title: 'blog'
}

// Смотреть
interface IWatchCategory extends TCategory {
  title: 'video'
}

// Новости
interface INewsCategory extends TCategory {
  title: 'news'
}

type ICategory = INewsCategory | IReadCategory | IWatchCategory

export type { TCategory, IReadCategory, IWatchCategory, INewsCategory }
export default ICategory
