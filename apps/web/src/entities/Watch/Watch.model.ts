import { IWatchCategory } from '../Category/Category.model'
import IPublication from '../Publication/Publication.model'

type IWatch = {
	category: IWatchCategory
} & IPublication

export default IWatch
