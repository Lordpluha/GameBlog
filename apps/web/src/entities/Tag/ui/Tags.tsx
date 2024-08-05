import { Chip } from '@nextui-org/react'
import ITag from '../models/Tag.model'

/**
 * Component with tags for search form popup
 * @param tags array of tags type of TTag[]
 */
function Tags({ tags }: { tags: ITag[] }) {
  return (
    <ul className='flex flex-wrap gap-3 px-4 text-[16px]'>
      {tags.map((tag, idx) => (
        <Chip key={idx}>
          <span>{tag.name}</span>
        </Chip>
      ))}
    </ul>
  )
}

export default Tags
