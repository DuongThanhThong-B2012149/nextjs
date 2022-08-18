import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'

export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <div className="">{children}</div>
    </div>
  )
}
