import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'
import { FileService } from 'src/file/file.service'
import { PrismaService } from 'src/common/prisma.service'
import { PaginationBlogQueryDto } from './dto/pagination.blog.dto'
import { BLOG_NOT_FOUND } from './constants/error.blogs.constants'
import * as generateSlug from 'slug'

@Injectable()
export class BlogService {
	constructor(
		private readonly fileService: FileService,
		private prisma: PrismaService
	) {}

	async create(createBlogDto: CreateBlogDto, userId: number, preview: Express.Multer.File) {
		const previewUrl = await this.fileService.upload(preview)
		const blog = await this.prisma.blog.create({
			data: {
				...createBlogDto,
				preview: previewUrl,
				author: {
					connect: { id: userId }
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
					select: {
						id: true,
						email: true,
						name: true
					}
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
						select: {
							id: true,
							name: true,
							email: true
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
			where: { id }
		})
		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		return blog
	}

	async update(
		id: number,
		userId: number,
		updateBlogDto: UpdateBlogDto,
		file?: Express.Multer.File
	) {
		const blog = await this.prisma.blog.findUnique({
			where: { id }
		})
		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		if (blog.authorId !== userId) throw new ForbiddenException()
		const dataUp = updateBlogDto.title
			? { title: updateBlogDto.title, slug: generateSlug(updateBlogDto.title + blog.id) }
			: {}
		if (file) {
			const previewUrl = await this.fileService.upload(file)
			dataUp['preview'] = previewUrl
			this.fileService.delete(blog.preview)
		}
		const updatedBlog = await this.prisma.blog.update({
			where: { id },
			data: {
				...updateBlogDto,
				...dataUp
			},
			include: {
				author: {
					select: {
						id: true,
						name: true,
						email: true
					}
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
			include: { author: { select: { id: true, name: true, email: true } } }
		})

		if (!blog) throw new NotFoundException(BLOG_NOT_FOUND)
		return blog
	}
}
