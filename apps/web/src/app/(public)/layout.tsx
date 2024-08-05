'use client'

import { type FC, type PropsWithChildren, useState } from 'react'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const pathnameArr = pathname.split('/')
  const [currentPage, setCurrentPage] = useState(
    pathnameArr[pathnameArr.length - 1]
  )

  let breadCrumbsItems = []
  pathnameArr.forEach(el => {
    const elName = el.charAt(0).toUpperCase() + el.slice(1)
    el !== '' &&
      breadCrumbsItems.push(
        <BreadcrumbItem
          key={el}
          href={`/${el}`}
          isCurrent={currentPage === el}
        >
          {elName}
        </BreadcrumbItem>
      )
  })

  return (
    <>
      <Breadcrumbs
        onAction={key => {
          setCurrentPage(key)
          router.push(`/${key !== 'home' ? key : ''}`)
        }}
        separator='/'
      >
        <BreadcrumbItem
          key='home'
          isCurrent={currentPage === 'home'}
        >
          Home
        </BreadcrumbItem>
        {...breadCrumbsItems}
      </Breadcrumbs>

      {children}
    </>
  )
}

export default PublicLayout
