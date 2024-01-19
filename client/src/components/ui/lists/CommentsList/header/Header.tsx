import Checkbox from '@/components/ui/checkbox/Checkbox'

interface Props {
	commentsLength: number
}

export default function Header({ commentsLength }: Props) {
	return (
		<div className='flex justify-between items-center'>
			<h2 className='text-2xl font-medium'>
				{commentsLength}{' '}
				{commentsLength === 1 ? 'Комментарий' : 'Комментариев'}
			</h2>

			<label className='flex items-center gap-4 cursor-pointer'>
				<Checkbox></Checkbox>
				<span className='text-lg font-medium'>Сворачивать ветки</span>
			</label>
		</div>
	)
}
