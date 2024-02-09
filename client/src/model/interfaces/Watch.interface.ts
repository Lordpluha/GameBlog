import { IWatchCategory } from './Category.interface'
import IPublication from './Publication.interface'

type IWatch = {
	category: IWatchCategory
} & IPublication

export default IWatch
