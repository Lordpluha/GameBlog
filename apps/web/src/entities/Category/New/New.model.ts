import type { INewsCategory } from '../Category.model'
import type IPublication from '../Publication/Publication.model'

type INew = {
  category: INewsCategory
} & IPublication

export default INew
