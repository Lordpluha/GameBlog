import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { SetRoleDto } from './dto'
import { RolesAuth } from 'src/role/decorators'
import { Role } from 'src/role/role.enum'

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.NO_CONTENT)
	@RolesAuth(Role.ADMIN)
	@Post('setRole')
	setRole(@Body() setRoleDto: SetRoleDto) {
		return this.userService.setRole(setRoleDto)
	}
}
