interface IUser {
	id: number
	name: string | undefined
	lastName?: string | undefined

	avatar?: string | undefined

	// Background image for profile
	cover?: string | undefined

	login?: string
	email: string

	role: 'user' | 'author'

	registrationDate: number
	subscribersCount: number

	lastVisitDate: number
	password: string
}

export default IUser
