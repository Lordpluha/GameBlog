import { ITags } from "./Tags.interface"
import { IUserData } from "./extras/UserShortData.interface"

export interface IFullNews {
    articleId: number
    category: string
    title: string
    seo: string
    authorData: IUserData
    fullText: string
    views: number
    comments: number
    publishedDate: number
    tags: ITags[]
}