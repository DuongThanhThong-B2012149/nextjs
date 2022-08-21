import { useRouter } from 'next/router'
import React from 'react'
import { authApi } from '../api-client'
import { useAuth } from '../hooks'

interface Props {}

const LoginPage = (props: Props) => {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })
  const handleLoginClick = async () => {
    try {
      await login()
      router.push('/about')
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('failed to get profile', error)
    }
  }
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button style={{ margin: '2px' }} onClick={handleLoginClick}>
        Login
      </button>
      <button style={{ margin: '2px' }} onClick={handleGetProfileClick}>
        Get Profile
      </button>
      <button style={{ margin: '2px' }} onClick={handleLogoutClick}>
        Logout
      </button>

      <button
        style={{ margin: '2px' }}
        onClick={() => {
          router.push('/about')
        }}
      >
        GO TO ABOUT
      </button>
    </div>
  )
}

export default LoginPage
