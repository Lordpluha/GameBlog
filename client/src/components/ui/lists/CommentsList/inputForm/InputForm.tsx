import { useState } from 'react'
import CommentForm from '@/components/shared/commentForm/CommentForm'
import { EyeOff, Image, Quote } from 'lucide-react'

export default function InputForm() {
	const [isFocused, setIsFocused] = useState(false)

	function handleFocus() {
		setIsFocused(state => !state)
	}

	return (
		<div className='relative'>
			{isFocused ? (
				<CommentForm handleClose={handleFocus}></CommentForm>
			) : (
				<button
					onClick={handleFocus}
					type='button'
					className='flex items-center justify-between w-full text-light-gray p-4 rounded-lg bg-dark-gray'
				>
					<span className='text-lg'>Написать комментарий...</span>
					<div className='flex gap-5'>
						<Image width={24} height={24} />

						<Quote width={24} height={24} />

						<EyeOff width={24} height={24} />
					</div>
				</button>
			)}
		</div>
	)
}
