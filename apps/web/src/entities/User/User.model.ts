interface IUser {
  id: number
  name: string | undefined
  role: 'user' | 'author'
  email: string

  lastName?: string | undefined

  avatar?: string | undefined

  // Background image for profile
  cover?: string | undefined

  login?: string

  password: string

  // registrationDate: number
  // subscribersCount: number

  // lastVisitDate: number
}

type IUserPublic = Omit<IUser, 'password'>

export type { IUser, IUserPublic }
