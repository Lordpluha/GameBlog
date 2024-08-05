import { FC, PropsWithChildren } from 'react'

const ProtectedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>ProtectedLayout</h1>
      {children}
    </div>
  )
}

export default ProtectedLayout
