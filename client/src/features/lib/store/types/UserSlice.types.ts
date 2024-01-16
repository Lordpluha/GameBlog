export enum EUserActionsType {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

type TFetchUsersAction = {
	type: EUserActionsType.FETCH_USERS
}
type TFetchUsersSuccessAction = {
	type: EUserActionsType.FETCH_USERS_SUCCESS
	payload: []
}
type TFetchUsersErrorAction = {
	type: EUserActionsType.FETCH_USERS_ERROR
	payload: string
}

export type TUserAction =
	| TFetchUsersAction
	| TFetchUsersSuccessAction
	| TFetchUsersErrorAction

export type TUserState = {
	loading: boolean
	users: []
	error: string | null
}
