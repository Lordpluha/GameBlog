import type { FC, PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextThemesProvider
    attribute='class'
    defaultTheme='dark'
  >
    {children}
  </NextThemesProvider>
)

export default ThemeProvider
