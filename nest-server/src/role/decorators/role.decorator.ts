import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'
import { Role } from '../role.enum'
import { AccessJwtGuard } from 'src/auth/decorators/access-jwt.decorator'
import { RolesGuard } from '../guards/role.guard'

export const ROLES_KEY = 'roles'

export const RolesAuth = (...roles: Role[]) => {
	return applyDecorators(
        AccessJwtGuard(),
        SetMetadata(ROLES_KEY, roles),
        UseGuards(RolesGuard)
    )
}
