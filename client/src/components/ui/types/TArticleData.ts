import { TArticleCategory } from "./TArticleCategory"

export type TArticleData = {
    id: number,
    seo: string,
    title: string,
    image: string,
    category: TArticleCategory[],
    releaseDate: number,
    commentsNum: number
}