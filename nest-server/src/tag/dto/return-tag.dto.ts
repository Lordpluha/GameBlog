import { Prisma } from '@prisma/client'

export const returnCategoryBaseObject: Prisma.TagSelect = {
	id: true,
	name: true,
	slug: true,
	createdAt: true,
	updatedAt: true
}
