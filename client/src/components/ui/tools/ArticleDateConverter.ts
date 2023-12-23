import { TdateConverter } from "../types/IDateConverter";

export const dateConverter:TdateConverter = (time:number) => {
    var stringData
    const monthTitle = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var articleDate = new Date(time*1000)
    var currentDay = new Date();
    
    if(currentDay.getDay() === articleDate.getDay()) {
        return stringData = "Today, " + articleDate.getHours() + ' : ' + articleDate.getMinutes()
    }

    if(currentDay.getDay() - 1 === articleDate.getDate()) {
        return stringData = "Yesterday, " + articleDate.getHours() + ' : ' + articleDate.getMinutes()
    }

    return `${monthTitle[articleDate.getMonth()]} ${articleDate.getDate()}`
}