'use client'

// import {semanticColors} from "@nextui-org/theme";

import clsx from 'clsx'
import {
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type PropsWithChildren
} from 'react'
import { useTheme } from 'next-themes'

export type TWrapperProps = {
  level?: 1 | 2
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>

export const Wrapper: FC<TWrapperProps> = ({
  className,
  level = 1,
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={clsx(
        level === 1 ? 'rounded-large p-5' : 'rounded-large py-6',
        className
      )}
      style={{
        backgroundColor:
          theme === 'dark'
            ? level === 1
              ? '#1E2224'
              : '#262A2C'
            : level === 1
              ? '#E8EAEB'
              : '#F3F4F5'
      }}
      {...props}
    >
      {children}
    </div>
  )
}
