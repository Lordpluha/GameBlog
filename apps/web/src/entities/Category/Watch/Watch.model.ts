import type { IWatchCategory } from '../Category.model'
import type IPublication from '../Publication/Publication.model'

type IWatch = {
  category: IWatchCategory
} & IPublication

export default IWatch
