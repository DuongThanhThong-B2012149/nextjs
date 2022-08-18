import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React, { useEffect } from 'react'

export const MainLayout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log('MainLayout mounting')
    return () => console.log('MainLayout unmounting')
  }, [])
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">
        <a style={{ border: '1px solid #ccc', margin: '8px' }}>Home</a>
      </Link>
      <Link href="/">
        <a style={{ border: '1px solid #ccc', margin: '8px' }}>About</a>
      </Link>
      <div className="">{children}</div>
    </div>
  )
}
