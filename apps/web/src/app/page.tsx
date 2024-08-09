import { PostCard } from '@entities/Post'
import { Slider, Wrapper } from '@gameblog/ui'
import { LinkProps } from '@nextui-org/react'

const XLPost = (props: LinkProps) =>
	(<PostCard
		size='xl'
		post={{
			id: 1,
			title: 'Some title',
			createdAt: Date(),
			slug: 'some_slug',
			preview: '/preview.jpg',
			_count: { comments: 5 },
			author: {
				name: 'Имя Фамилия'
			},
			category: {
				title: 'Блог'
			}
		}}
		{...props}
	/>)

export default function Home() {
  return (
    <>
      <Wrapper level={1}>
        <Slider size={'xl'} slides={[
					<div className='grid gap-6 grid-cols-6 grid-rows-[auto_auto]'>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
					</div>,
					<div className='grid gap-6 grid-cols-6 grid-rows-[auto_auto]'>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
					</div>,
					<div className='grid gap-6 grid-cols-6 grid-rows-[auto_auto]'>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-3'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
						<XLPost className='col-span-2'/>
					</div>
				]} />
      </Wrapper>

      <Wrapper level={1}>
        <header></header>
        <div>
          <aside></aside>
          <div>
            <Wrapper
              level={2}
              className='grid grid-cols-2 p-4 odd:border-r-1 border-primary-50 even:border-l-1 '
            >
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
								className=''
              />
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
              />
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
              />
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
              />
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
              />
              <PostCard
                size='xs'
                post={{
                  id: 1,
                  title: 'Some title',
                  createdAt: Date(),
                  slug: 'some_slug',
                  preview: '/preview.jpg',
                  _count: { comments: 5 }
                }}
              />
            </Wrapper>
            <PostCard
              size='s'
              post={{
                id: 1,
                title: 'Some title',
                createdAt: Date(),
                slug: 'some_slug',
                preview: '/preview.jpg',
                _count: { comments: 5 },
                author: {
                  name: 'Имя Фамилия'
                }
              }}
            />
            <PostCard
              size='m'
              post={{
                id: 1,
                title: 'Some title',
                createdAt: Date(),
                slug: 'some_slug',
                preview: '/preview.jpg',
                _count: { comments: 5 },
                author: {
                  name: 'Имя Фамилия'
                },
								category: {
									title: 'Блог'
								}
              }}
            />
            <PostCard
              size='md'
              post={{
                id: 1,
                title: 'Some title',
                createdAt: Date(),
                slug: 'some_slug',
                preview: '/preview.jpg',
                _count: { comments: 5 },
                author: {
                  name: 'Имя Фамилия'
                },
								category: {
									title: 'Блог'
								}
              }}
            />
            <PostCard
              size='xl'
              post={{
                id: 1,
                title: 'Some title',
                createdAt: Date(),
                slug: 'some_slug',
                preview: '/preview.jpg',
                _count: { comments: 5 },
                author: {
                  name: 'Имя Фамилия'
                },
								category: {
									title: 'Блог'
								}
              }}
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}
