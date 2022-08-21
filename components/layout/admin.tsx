import { useAuth } from '@/hooks/use-auth'
import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import Auth from '../common/auth'

export const AdminLayout = ({ children }: LayoutProps) => {
  const { profile, logout } = useAuth()
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <button onClick={handleLogoutClick}>logout</button>
      <p>{JSON.stringify(profile)}</p>
      <Link href="/">
        <a>Home</a>
      </Link>

      <div className="">{children}</div>
    </Auth>
  )
}
