import { IPost } from '@model/interfaces'

const PostsLarge = ({ posts }: { posts: IPost[] }) => (
	<>
		{posts.map(el => (
			<></>
		))}
	</>
)

export default PostsLarge
