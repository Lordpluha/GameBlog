import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JWT_REFRESH_STRATEGY } from '../constants/auth.constants'

export const RefreshJwtGuard = () => UseGuards(AuthGuard(JWT_REFRESH_STRATEGY))
