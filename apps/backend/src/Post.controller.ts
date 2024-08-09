import { Request, Response } from 'express';
import { IPost } from './Post.scheme.ts';
import PostService from './Post.service.ts';

class PostController {
	async create(req: Request<IPost>, res: Response<IPost>) {
		try {
			const post = await PostService.create(req.body);
			// @ts-expect-error
			res.json(post);
		} catch (error: any) {
			res.status(500).json(error.message);
		}
	}

	async getAll(req: Request, res: Response<IPost[]>) {
		try {
			const posts = await PostService.getAll();
			return res.json(posts);
		} catch (error: any) {
			res.status(500).json(error.message);
		}
	}

	async getOne(req: Request<IPost['id']>, res: Response<IPost>) {
		try {
			const post = await PostService.getOne(req.params.id);
			// @ts-expect-error
			return res.json(post);
		} catch (error: any) {
			res.status(500).json(error.message);
		}
	}

	async update(req: Request<IPost>, res: Response<IPost>) {
		try {
			const updatedPost = await PostService.update(req.body);
			// @ts-expect-error
			return res.json(updatedPost);
		} catch (error: any) {
			res.status(500).json(error.message);
		}
	}

	async delete(req: Request<IPost['id']>, res: Response<unknown>) {
		try {
			const deletedPost = await PostService.delete(req.params.id);
			return res.json(deletedPost);
		} catch (error: any) {
			res.status(500).json(error.message);
		}
	}
}

export default new PostController();
