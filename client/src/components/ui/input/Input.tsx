interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	labelClass?: string
	spanClass?: string
	children?: string
}

export default function Input(props: Props) {
	const {
		children,
		labelClass = '',
		spanClass = '',
		className = '',
		...inputProps
	} = props

	if (!children) {
		return (
			<input
				type='text'
				{...inputProps}
				className={`w-full ${className}`}
			/>
		)
	}

	return (
		<label className={`flex flex-col gap-1 w-full ${labelClass}`}>
			<span className={`text-sm ${spanClass}`}>{children}</span>
			<input
				type='text'
				{...inputProps}
				className={`w-full ${className}`}
			/>
		</label>
	)
}
