interface IUser {
	firstName: string | null
	lastName: string | null

	avatar: string | null
	// Background image for profile
	cover: string | null

	login: string
	// password: string
	// email: string

	status: 'user' | 'author'

	// registrationDate: number
	// subscribersCount: number

	// lastVisitDate: number
}

export default IUser
