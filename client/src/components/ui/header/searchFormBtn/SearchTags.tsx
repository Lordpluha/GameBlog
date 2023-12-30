const tags = [
	{name:'Игры'},
	{name:'Пользователи'},
	{name:'Новости'},
	{name:'Блоги'},
	{name:'Статьи'},
	{name:'Видео'},
	{name:'Читы'},
	{name:'Комментарии'},
	{name:'Помощь'}
]

const SearchTags = () => {
	return (
		<ul className='flex gap-3 text-[16px] flex-wrap'>
			{tags.map((tag, idx) => (
				<li key={idx}>
					<button
						className='px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-[#babdbe] text-[#24282b] rounded-xl'
						type='button'
					>
						<span>{tag.name}</span>
					</button>
				</li>
			))}
			
		</ul>
	)
}

export default SearchTags
