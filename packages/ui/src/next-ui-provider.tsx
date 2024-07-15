import { type FC, type PropsWithChildren } from 'react'
import { NextUIProvider as NextUIProviderUI } from '@nextui-org/react'

const NextUIProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProviderUI>{children}</NextUIProviderUI>
)

export default NextUIProvider
