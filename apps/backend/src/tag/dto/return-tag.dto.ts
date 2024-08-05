import { Prisma } from '@prisma/client'

export const returnTagBaseObject: Prisma.TagSelect = {
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true
}
