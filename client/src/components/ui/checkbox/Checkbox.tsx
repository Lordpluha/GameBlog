import clsx from 'clsx'
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Checkbox() {
	const [isChecked, setChecked] = useState(false)

	function toggleCheck() {
		setChecked(state => !state)
	}

	return (
		<button
			className={`inline-flex items-center justify-center w-5 h-5 border-solid border-[1.5px] border-[rgb(65,71,74)] rounded group ${clsx(
				{
					'border-[rgb(0,168,121)] bg-[rgb(0,168,121)] hover:bg-[rgb(0,138,99)]': isChecked,
					'hover:border-[rgb(87,93,97)]': !isChecked
				}
			)}`}
			onClick={toggleCheck}
		>
			<Check
				width={12}
				height={12}
				className={`${clsx({
					'text-white': isChecked,
					'block opacity-0 group-hover:text-[rgb(87,93,97)]  group-hover:opacity-100':
						!isChecked
				})}`}
			/>
		</button>
	)
}
