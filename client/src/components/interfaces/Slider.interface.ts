import { IUserShortData } from "./extras/UserShortData.interface"

export interface ISlider {
    seo: string
    image: string
    category: string
    description: string
    date?: number
    authorData?: IUserShortData
}