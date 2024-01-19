import { useState } from 'react'

import clsx from 'clsx'
import { Check } from 'lucide-react'

export default function Checkbox() {
	const [isChecked, setChecked] = useState(false)

	function toggleCheck() {
		setChecked(state => !state)
	}

	return (
		<button
			className={`inline-flex items-center justify-center w-5 h-5 border-solid border-[1.5px] border-dark-gray-primary rounded group ${clsx(
				{
					'border-light-green bg-light-green hover:bg-light-green':
						isChecked,
					'hover:border-light-gray-primary': !isChecked
				}
			)}`}
			onClick={toggleCheck}
		>
			<Check
				width={12}
				height={12}
				className={`${clsx({
					'text-white': isChecked,
					'block opacity-0 group-hover:text-light-gray-primary  group-hover:opacity-100':
						!isChecked
				})}`}
			/>
		</button>
	)
}
