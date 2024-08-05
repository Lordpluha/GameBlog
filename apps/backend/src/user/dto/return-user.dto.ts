import { Prisma } from '@prisma/client'

export const returnUserBaseObject: Prisma.UserSelect = {
  email: true,
  id: true,
  name: true,
  role: true
}
