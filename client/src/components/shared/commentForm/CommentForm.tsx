import { EyeOff, Image, Quote } from 'lucide-react'

interface Props {
	handleClose: () => void
}

export default function CommentForm(props: Props) {
	const { handleClose } = props

	return (
		<form className='has-[:focus]:shadow-commentForm duration-200 relative p-4 rounded-lg bg-dark-gray'>
			<div className='flex flex-col gap-5'>
				<input
					className=' bg-transparent outline-none text-lg'
					type='text'
					autoFocus
				></input>
				<div className='flex justify-between items-center'>
					<div className='flex gap-4'>
						<button
							type='submit'
							className='text-black font-medium text-lg py-3 px-5 rounded-lg bg-white hover:opacity-80'
						>
							Отправить
						</button>
						<button
							type='button'
							className='text-black font-medium text-lg py-3 px-5 rounded-lg bg-white hover:opacity-80'
							onClick={handleClose}
						>
							Отмена
						</button>
					</div>
					<div className='flex gap-5 text-light-gray'>
						<button type='button'>
							<Image
								className='hover:text-light-red-primary'
								width={24}
								height={24}
							/>
						</button>

						<button type='button'>
							<Quote
								className='hover:text-light-red-primary'
								width={24}
								height={24}
							/>
						</button>

						<button type='button'>
							<EyeOff
								className='hover:text-light-red-primary'
								width={24}
								height={24}
							/>
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}
