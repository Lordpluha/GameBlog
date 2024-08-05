interface IArtisle {
  title: string
  createdAt: string
  slug: string
}

interface IComment {
  text: string
  createdAt: string
  articleId: string
  blogId: string
  authorId: string
  parentId: string
  level: number
  author: UserModel
  article?: IArtisle
  _count: {
    children: 0
  }
}

export default IComment
