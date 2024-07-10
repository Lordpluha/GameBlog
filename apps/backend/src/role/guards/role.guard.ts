import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Role } from '../role.enum'
import { ROLES_KEY } from '../decorators/role.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler())
		if (!roles) return true
		const request = context.switchToHttp().getRequest()
		const user = request.user
		console.log(user)
		console.log(roles, 'roles')
		return roles.some(role => user.role === role)
	}
}
