import { IPublication } from '@model/interfaces'

import PostSmall from './@PostSmall/PostSmall'

const PostsSmall = ({ posts, to }: { posts: IPublication[], to: string }) => (
	<>
		{posts.map(el => (
			<PostSmall post={el} to={to} />
		))}
	</>
)

export default PostsSmall
