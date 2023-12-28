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

// eslint-disable-next-line no-unused-vars
type TdateConverter = (time: number) => string

/**
 * Tool func to convert date from number to formatted string
 * General usage is for Article component
 *
 * @author kiberchainik
 * @param time number
 * @return string
 */
export const dateConverter: TdateConverter = (time = 0) => {
	const currentDate = new Date()
	const currentDay = currentDate.getDay()

	const articleDate = new Date(time * 1000)
	const articleDates = {
		Month: articleDate.getMonth(),
		MonthDay: articleDate.getDate(),
		Day: articleDate.getDay(),
		Hours: articleDate.getHours(),
		Minutes: articleDate.getMinutes()
	}

	const isToday = currentDay === articleDates.Day
	const isYesterday = currentDay - 1 === articleDates.MonthDay

	let stringData
	if (isToday) {
		stringData =
			`Today, ` + articleDates.Hours + ' : ' + articleDates.Minutes
	} else if (isYesterday) {
		stringData =
			'Yesterday, ' + articleDates.Hours + ' : ' + articleDates.Minutes
	} else {
		stringData = `${monthTitle[articleDates.Month]} ${
			articleDates.MonthDay
		}`
	}

	return stringData
}
