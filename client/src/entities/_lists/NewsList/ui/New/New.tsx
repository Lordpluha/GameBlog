import INew from '@/model/interfaces/New.interface'
import { Cover } from '@/shared'

import NewFooter from './NewFooter/NewFooter'
import NewInfo from './NewInfo/NewInfo'
import NewTitle from './NewTitle/NewTitle'

/**
 * Renders a News component with the provided news data.
 *
 * @param {INew} myNew - The new data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
const New = (myNew: INew) => {
	const {
		category: category,
		content,
		createdAt,
		preview,
		commentsCount,
		user
	} = myNew

	function addToBookmark() {}

	return (
		<div className='flex flex-col gap-4 max-w-[350px] bg-neutral-800 rounded-2xl overflow-hidden'>
			<Cover height='56em' width='100%' src={preview} />
			<div className='flex flex-col gap-4 p-3'>
				<NewInfo category={category} user={user} />
				<NewTitle content={content} />
				<NewFooter
					createdAt={`${createdAt}`}
					addToBookmark={addToBookmark}
					commentsCount={commentsCount}
				/>
			</div>
		</div>
	)
}

export default New
