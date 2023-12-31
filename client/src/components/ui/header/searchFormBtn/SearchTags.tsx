import './searchFormBtn.scss'

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
				<li key={idx} className='searchFormTags'>
					<span>{tag.name}</span>
				</li>
			))}
			
		</ul>
	)
}

export default SearchTags
