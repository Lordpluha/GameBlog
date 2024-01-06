import { IUserShortData } from "./extras/UserShortData.interface"

export interface ISliderInterface {
    seo: string
    image: string
    category: string
    description: string
    date?: number
    authorData?: IUserShortData
}