import { Prisma } from '@prisma/client'

export const returnCategoryBaseObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true,
	createdAt: true,
	updatedAt: true
}
