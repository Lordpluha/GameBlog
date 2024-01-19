import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'

interface Props {
	rating: number
}

export default function Rating({ rating }: Props) {
	function increaseRating() {}

	function decreaseRating() {}

	return (
		<div className='inline-flex items-center gap-2'>
			<button onClick={decreaseRating}>
				<Minus width={16} height={16} />
			</button>
			<span
				className={`rounded-lg py-[6px] px-3 text-white font-medium ${clsx(
					{
						'bg-light-green': rating > 0,
						'bg-light-red': rating < 0,
						'bg-dark-gray-primary': rating === 0
					}
				)}`}
			>
				{rating}
			</span>
			<button onClick={increaseRating}>
				<Plus width={16} height={16}></Plus>
			</button>
		</div>
	)
}
