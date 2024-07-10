import { isNumber } from 'lodash'

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

type TdateConverter = (time: number | string) => string

/**
 * Tool func to convert date from number to formatted string
 * General usage is for Article component
 *
 * @author THE BIG MONSTER! -> kiberchainik
 * @param time number
 * @return string
 */

type TarticleDate = {
	Month: number
	MonthDay: number
	Day: number
	Hours: number
	Minutes: number
}

function Converter(currentDay: number, articleDates: TarticleDate): string {
	const isToday = currentDay === articleDates.Day
	const isYesterday = currentDay - 1 === articleDates.Day

	let stringData
	if (isToday) {
		stringData =
			'Today, ' + articleDates.Hours + ' : ' + articleDates.Minutes
	} else if (isYesterday) {
		stringData =
			'Yesterday, ' + articleDates.Hours + ' : ' + articleDates.Minutes
	} else {
		stringData = `${monthTitle[articleDates.Month]} ${articleDates.Day}`
	}
	return stringData
}

const dateConverter: TdateConverter = time => {
	const currentDate = new Date()
	const currentDay = currentDate.getDay()

	const date = isNumber(time) ? time * 1000 : time
	const articleDate = new Date(date)

	const articleDates = {
		Month: articleDate.getMonth(),
		MonthDay: articleDate.getDate(),
		Day: articleDate.getDay(),
		Hours: articleDate.getHours(),
		Minutes: articleDate.getMinutes()
	}

	Converter(currentDay, articleDates)

	return Converter(currentDay, articleDates)
}

export default dateConverter
