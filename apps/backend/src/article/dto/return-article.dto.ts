import { Prisma } from '@prisma/client'

export const returnArticleBaseObject: Prisma.ArticleSelect = {
  id: true,
  content: true,
  preview: true,
  title: true,
  createdAt: true,
  updatedAt: true,
  slug: true,
  views: true
}
