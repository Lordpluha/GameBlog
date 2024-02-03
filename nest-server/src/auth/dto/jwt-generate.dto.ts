import { Role } from 'src/role/role.enum'

export class JwtGenerateDto {
	id: number
	email: string
	name: string
	role: Role
}
