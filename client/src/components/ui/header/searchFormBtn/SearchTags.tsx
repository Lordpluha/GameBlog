import styles from './searchFormBtn.module.scss'

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

/**
 * Component with tags for search form popup
 */

const SearchTags = () => {
	return (
		<ul className='flex gap-3 text-[16px] flex-wrap'>
			{tags.map((tag, idx) => (
				<li key={idx} className={styles.searchFormTags}>
					<span>{tag.name}</span>
				</li>
			))}
		</ul>
	)
}

export default SearchTags
