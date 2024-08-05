import { IsEnum, IsInt } from 'class-validator'
import { Role } from 'src/role/role.enum'

export class SetRoleDto {
  @IsInt()
  userId: number

  @IsEnum(Role)
  role: Role
}
