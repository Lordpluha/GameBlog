import Post, { IPost } from "./Post.scheme.ts";

class PostService {
	async create(post: IPost) {
		const createdPost = await Post.create(post);
		return createdPost;
	}

	async getAll() {
		const posts: IPost[] = await Post.find();
		return posts;
	}

	async getOne(id: IPost['id']) {
		if (!id) {
			throw new Error("Id is required");
		}
		const post = await Post.findById(id);
		return post;
	}

	async update(post: IPost) {
		if (!post._id) {
			throw new Error("Id is required");
		}
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		});
		return updatedPost;
	}

	async delete(id: IPost['id']) {
		if (!id) {
			throw new Error("Id is required");
		}
		const deletedPost = await Post.findByIdAndDelete(id);
		return deletedPost;
	}
}

export default new PostService();
