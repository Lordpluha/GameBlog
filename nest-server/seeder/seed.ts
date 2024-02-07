import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import * as generateSlug from 'slug'
import { readdir } from 'fs/promises'
import { join } from 'path'

const prisma = new PrismaClient()

const findByExtension = async () => {
	try {
		const files = await readdir(join(__dirname, '../static/image'))
		return files[0]
	} catch (e) {
		return null
	}
}

const createBlogs = async (quantity: number) => {
	const blogs = []
	const previewUrl = (await findByExtension()) ?? faker.image.urlPicsumPhotos()

	for (let i = 0; i < quantity; i++) {
		const title = faker.lorem.words({ max: 15, min: 2 })
		const content = faker.lorem.words({ max: 50, min: 20 })
		const sl = generateSlug(title + '-' + Math.ceil(Math.random() * 100))
		const blog = await prisma.blog.create({
			data: {
				content,
				title,
				slug: sl,
				preview: previewUrl,
				author: {
					connect: {
						id: 1
					}
				}
			}
		})
		blogs.push(blog)
	}

	return blogs.length
}

const createArticles = async (quantity: number) => {
	const articles = []
	const previewUrl = (await findByExtension()) ?? faker.image.urlPicsumPhotos()
	const anyTags = []
	const quantityTags = Math.round(Math.random() * 6)
	for (let i = 0; i < quantityTags; i++) {
		anyTags[i] = faker.commerce.department()
	}
	for (let i = 0; i < quantity; i++) {
		const title = faker.lorem.words({ max: 15, min: 2 })
		const content = faker.lorem.words({ max: 50, min: 20 })
		const sl = generateSlug(title + '-' + Math.ceil(Math.random() * 100))
		const article = await prisma.article.create({
			data: {
				content,
				title,
				slug: sl,
				preview: previewUrl,
				anyTags: anyTags,
				author: {
					connect: {
						id: 1
					}
				}
			}
		})
		articles.push(article)
	}

	return articles.length
}

const main = async () => {
	try {
		console.log('Start sedding...')
		const count = await createBlogs(10)
		console.log(`Created ${count}  blogs`)
		const c = await createArticles(10)
		console.log(`Created ${c}  articles`)
		console.log('End sedding.')
	} catch (e) {
		console.error(e)
	} finally {
		await prisma.$disconnect()
	}
}

main()
