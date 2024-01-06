import { IOtherNewsNavigation } from "./OtherNewsNavigation.interface"
import { ITagsInterface } from "./Tags.interface"
import { IUserShortData } from "./extras/UserShortData.interface"

export interface IFullNewsInterface {
    articleId: number
    category: string
    title: string
    authorData: IUserShortData,
    fullText: string
    views: number
    comments: number
    publishedDate: number
    otherNews?: IOtherNewsNavigation[]
    tags: ITagsInterface[]
}