import { Schema, model, Document, Model } from "mongoose";

export interface IPost extends Document {
  author: string;
  title: string;
  content: string;
  picture: string;
}

export const PostScheme: Schema = new Schema({
	author: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
	},
});

const PostModel = model('Post', PostScheme);

export default PostModel
