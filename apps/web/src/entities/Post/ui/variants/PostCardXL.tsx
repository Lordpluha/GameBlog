'use client'

import { type FC } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { TPostCardProps } from '@entities/Post/models'

const PostCardXL: FC<Omit<TPostCardProps, 'size'>> = () => {
  return <div>PostXL</div>
}

export default PostCardXL
