import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { FileService } from 'src/file/file.service'
import { PrismaService } from 'src/database/prisma.service'
import { CreateBlogDto, UpdateBlogDto, PaginationBlogQueryDto } from './dto'
import { BLOG_NOT_FOUND } from './constants/error.blogs.constants'
import * as generateSlug from 'slug'
import { returnUserBaseObject } from 'src/user/dto'
import { CategoryService } from 'src/category/category.service'
import { returnCategoryBaseObject } from 'src/category/dto'

@Injectable()
export class BlogService {
	constructor(
		private readonly fileService: FileService,
		private readonly categoryService: CategoryService,
		private prisma: PrismaService
	) {}

	async create(dto: CreateBlogDto, userId: number, preview: Express.Multer.File) {
		const previewUrl = await this.fileService.upload(preview)
		const existsCategories = await this.categoryService.getByIds([...dto.categories])
		const blog = await this.prisma.blog.create({
			data: {
				...dto,
				preview: previewUrl,
				author: {
					connect: { id: userId }
				},
				categories: {
					connectOrCreate: {
						create: {
							name: 'Блоги'
						},
						where: {
							name: 'Блоги'
						}
					},
					connect: existsCategories.map(category => ({ id: category.id }))
				}
			}
		})
		const updatedBlog = await this.prisma.blog.update({
			where: { id: blog.id },
			data: {
				slug: generateSlug(blog.title + ' ' + blog.id)
			},
			include: {
				author: {
					select: returnUserBaseObject
				}
			}
		})
		return updatedBlog
	}

	async findAll({ count, page, authorId }: PaginationBlogQueryDto) {
		const where = authorId ? { author: { id: authorId } } : {}
		const [blogs, blogsCount] = await this.prisma.$transaction([
			this.prisma.blog.findMany({
				where,
				orderBy: { createdAt: 'desc' },
				skip: page * count - count,
				take: count,
				include: {
					author: {
						select: returnUserBaseObject
					},
					_count: {
						select: {
							comments: true
						}
					}
				}
			}),
			this.prisma.blog.count({ where })
		])
		return [blogs, blogsCount]
	}

	async findOne(id: number) {
		const blog = await this.prisma.blog.findUnique({
			where: { id },
			include: {
				author: {
					select: returnUserBaseObject
				},
				categories: {
					select: returnCategoryBaseObject
				}
			}
		})
		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		return blog
	}

	async update(id: number, userId: number, dto: UpdateBlogDto, file?: Express.Multer.File) {
		const blog = await this.findOne(id)
		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		if (blog.authorId !== userId) throw new ForbiddenException()
		const dataUp = dto.title
			? { title: dto.title, slug: generateSlug(dto.title + blog.id) }
			: {}
		if (file) {
			const previewUrl = await this.fileService.upload(file)
			dataUp['preview'] = previewUrl
			this.fileService.delete(blog.preview)
		}

		let connectAndDisconnect = {}
		if (dto.categories.length) {
			const existsCategories = await this.categoryService.getByIds([...dto.categories])
			connectAndDisconnect = {
				disconnect: blog.categories.map(c => ({ id: c.id })),
				connect: existsCategories.map(c => ({ id: c.id }))
			}
		}

		const updatedBlog = await this.prisma.blog.update({
			where: { id },
			data: {
				...dto,
				...dataUp,
				categories: connectAndDisconnect
			},
			include: {
				author: {
					select: returnUserBaseObject
				}
			}
		})
		return updatedBlog
	}

	async remove(id: number, userId: number) {
		const blog = await this.prisma.blog.findUnique({
			where: { id }
		})
		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		if (blog.authorId !== userId) throw new ForbiddenException()
		this.fileService.delete(blog.preview)
		await this.prisma.blog.delete({
			where: { id }
		})
	}

	async bySlug(slug: string) {
		const blog = await this.prisma.blog.findUnique({
			where: { slug },
			include: {
				author: {
					select: returnUserBaseObject
				}
			}
		})

		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		return blog
	}
}
