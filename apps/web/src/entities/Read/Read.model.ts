import { IReadCategory } from '../Category/Category.model'
import IPublication from '../Publication/Publication.model'

type IRead = {
	category: IReadCategory
} & IPublication

export default IRead
