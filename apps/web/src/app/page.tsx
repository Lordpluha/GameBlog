import { PostCard } from '@entities/Post'
import { Slider, Wrapper } from '@gameblog/ui'

export default function Home() {
  return (
    <>
      <Wrapper level={1}>
        <Slider size={'xl'} />
      </Wrapper>

      <Wrapper level={1}>
        <header></header>
        <div>
          <aside></aside>
          <div>
            <Wrapper
              level={2}
              className='grid grid-cols-2 p-4'
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
                }
              }}
            />
            <PostCard
              size='xxl'
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
          </div>
        </div>
      </Wrapper>
    </>
  )
}
