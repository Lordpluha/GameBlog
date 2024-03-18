import { INewsCategory } from './Category.interface'
import IPublication from './Publication.interface'

type INew = {
	category: INewsCategory
} & IPublication

export default INew
