import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable
} from '@nestjs/common'
import { CreateUserDto, SetRoleDto } from './dto'
import { PrismaService } from 'src/database/prisma.service'
import { USER_WITH_EMAIL_ALREADY_EXISTS } from './constants/error.constants.user'
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager'
import { User } from '@prisma/client'
import { Role } from 'src/role/role.enum'

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const isUser = await this.byEmail(createUserDto.email)
    if (isUser) throw new BadRequestException(USER_WITH_EMAIL_ALREADY_EXISTS)
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto
      }
    })
    await this.cacheManager.set(`user-${user.id}`, user)
    await this.cacheManager.set(`user-email-${user.email}`, user)
    return user
  }

  public async byEmail(email: string, isReset = false) {
    if (isReset) await this.cacheManager.get(`user-email-${email}`)
    const cacheUser: User = await this.cacheManager.get(`user-email-${email}`)
    if (cacheUser) return cacheUser
    const user = await this.prisma.user.findUnique({
      where: { email }
    })
    if (user) await this.cacheManager.set(`user-email-${user.email}`, user)
    return user
  }

  public async byId(id: number, isReset = false) {
    if (isReset) await this.cacheManager.get(`user-${id}`)
    const cacheUser: User = await this.cacheManager.get(`user-${id}`)
    if (cacheUser) return cacheUser
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    if (user) await this.cacheManager.set(`user-${user.id}`, user)
    return user
  }

  public async setRole({ role, userId }: SetRoleDto) {
    const user = await this.byId(userId, true)
    if (user.role === Role.ADMIN) throw new ForbiddenException()
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { role }
    })
    await this.cacheManager.set(`user-${userId}`, updatedUser)
  }
}
