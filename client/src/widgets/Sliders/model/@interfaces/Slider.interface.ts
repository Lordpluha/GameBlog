import { IUser } from '@model/interfaces'

interface ISlider {
	slug: string
	preview: string
	category: string
	description: string
	createdAt?: number
	author?: IUser
}

export { type ISlider }
