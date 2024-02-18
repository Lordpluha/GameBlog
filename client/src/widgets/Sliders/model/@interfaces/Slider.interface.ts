import { IUser } from '@model/interfaces'

interface ISlider {
	slug: string
	image: string
	category?: string
	description?: string
	createdAt?: number
	author?: IUser
}

export { type ISlider }
