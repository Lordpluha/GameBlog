import { INewsCategory } from '../Category/Category.model'
import IPublication from '../Publication/Publication.model'

type INew = {
	category: INewsCategory
} & IPublication

export default INew
