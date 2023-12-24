type TdateConverter = (time: number) => string

export const dateConverter: TdateConverter = (time: number) => {
	let stringData
	const monthTitle = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	const articleDate = new Date(time * 1000)
	const currentDay = new Date()

	if (currentDay.getDay() === articleDate.getDay()) {
		return (stringData =
			'Today, ' +
			articleDate.getHours() +
			' : ' +
			articleDate.getMinutes())
	}

	if (currentDay.getDay() - 1 === articleDate.getDate()) {
		return (stringData =
			'Yesterday, ' +
			articleDate.getHours() +
			' : ' +
			articleDate.getMinutes())
	}

	return `${monthTitle[articleDate.getMonth()]} ${articleDate.getDate()}`
}
