import { type FC } from 'react'
import { Bookmark } from 'lucide-react'
import { Button, ButtonProps } from '@nextui-org/react'

/**
 * Button with a bookmark icon.
 */
const AddToBookmarkBtn: FC<ButtonProps> = props => (
  <Button {...props}>
    <Bookmark className='stroke-gray-400 stroke-1 hover:stroke-red-600' />
  </Button>
)

export default AddToBookmarkBtn
