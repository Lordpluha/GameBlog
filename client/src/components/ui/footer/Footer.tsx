import { Container } from '../Container'

export const Footer = () => {
	return (
		<div>
			<Container>
				<div className='w-full flex justify-between'>
					<div className=''>
						Brand
						<img src="" alt="Logo" />
						<p>brand slogan</p>
					</div>

					<ul className='flex'>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
						<li>Socials</li>
					</ul>
				</div>

				<div className='grid gap-y-5 grid-cols-2'>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
					<div><h6>Category title</h6><ul><li>Link</li><li>Link</li><li>Link</li></ul></div>
				</div>

				<div className='flex justify-between'>
					<ul className='flex'>
						<li>Links</li>
						<li>Links</li>
						<li>Links</li>
						<li>Links</li>
						<li>Links</li>
						<li>Links</li>
					</ul>
					<div>
						Copyright
					</div>
				</div>


			</Container>
		</div>
	)
}
