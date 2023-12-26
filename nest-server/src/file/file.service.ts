import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { access, mkdir, unlink, writeFile } from 'fs/promises'
import { join } from 'path'

@Injectable()
export class FileService {
	async upload(file: Express.Multer.File) {
		const [mimetype, typeFile] = file.mimetype.split('/')

		const fileName = `${randomUUID()}.${typeFile}`
		const uploadFolder = join(__dirname, '..', '../static')
		const isDir = await this.exists(uploadFolder)

		if (!isDir) await mkdir(uploadFolder, { recursive: true })

		const dirMimeTypePath = join(uploadFolder, '/' + mimetype)
		const isDirMimeType = await this.exists(dirMimeTypePath)

		if (!isDirMimeType) await mkdir(dirMimeTypePath, { recursive: true })

		await writeFile(join(dirMimeTypePath, fileName), file.buffer)
		return mimetype + '/' + fileName
	}

	async delete(fileName: string) {
		const [dir, file] = fileName.split('/')
		const path = join(__dirname, '..', '../static', `/${dir}`, file)
		await unlink(path)
	}

	async exists(path: string) {
		try {
			await access(path)
			return true
		} catch (e) {
			return false
		}
	}
}
