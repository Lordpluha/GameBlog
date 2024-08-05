import { type FC } from 'react'
import clsx from 'clsx'

/**
 * Logo component
 * included image or text for logo app
 */
export type TLogoProps = {
  subtitle?: boolean
}

const Logo: FC<TLogoProps> = ({ subtitle = false }) => {
  return (
    <div className='dark'>
      <h3 className='text-2xl font-extrabold text-foreground'>GameBlog</h3>
      <p className={clsx('text-content1', !subtitle && 'hidden')}>
        Рассказываем вам о видеоиграх
      </p>
    </div>
  )
}

export default Logo
