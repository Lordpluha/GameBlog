import { IReadCategory } from './Category.interface'
import IPublication from './Publication.interface'

type IRead = {
	category: IReadCategory
} & IPublication

export default IRead
