'use client'
import { PostCard } from '@entities/Post'
import { Wrapper } from '@gameblog/ui'
import {MainPageSlider} from '@/widgets/MainPageSlider'
import {MainPageAside} from '@/widgets/MainPageAside'
import {LatestNews} from '@/widgets/LatestNews'


export default function Home() {
  return (
    <div className='container mx-auto'>
      <Wrapper level={1} className='mb-4'>
				<MainPageSlider />
      </Wrapper>

      <Wrapper level={1} className='mb-4 px-9 py-5'>
        <h1 className='text-large'>
					Всё про видеоигры
				</h1>
        <div className='flex flex-row'>
          <MainPageAside />

          <div className="grid grid-cols-2 grid-rows-auto gap-6">
            <div className='col-span-full row-span-1'>
            	<Wrapper
	              level={2}
	              className='p-4'
	            >
								<LatestNews />
	            </Wrapper>
            </div>

						<div className='grid grid-cols-subgrid grid-rows-auto col-span-full gap-6'>
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
								className='col-span-1 row-span-1'
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
								className='col-span-1 row-span-1'
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
								className='col-span-full row-span-1'
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
								className='col-span-1 row-span-1'
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
								className='col-span-1 row-span-1'
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
								className='col-span-full row-span-1'
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
								className='col-span-1 row-span-1'
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
								className='col-span-1 row-span-1'
							/>
						</div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
