import { GoogleIcon, OkIcon, VKIcon, YandexIcon } from '@shared/ui'

const Socials = () => {
	return (
		<ul>
			<li className='hover:scale-125 transition duration-150 ease-in-out'>
				<a href='#'>
					<VKIcon />
				</a>
			</li>
			<li className='hover:scale-125 transition duration-150 ease-in-out'>
				<a href='#'>
					<GoogleIcon />
				</a>
			</li>
			<li className='hover:scale-125 transition duration-150 ease-in-out'>
				<a href='#'>
					<YandexIcon />
				</a>
			</li>
			<li className='hover:scale-125 transition duration-150 ease-in-out'>
				<a href='#'>
					<OkIcon />
				</a>
			</li>
		</ul>
	)
}

export default Socials
