import type { IReadCategory } from '../Category.model'
import type IPublication from '../Publication/Publication.model'

type IRead = {
  category: IReadCategory
} & IPublication

export default IRead
