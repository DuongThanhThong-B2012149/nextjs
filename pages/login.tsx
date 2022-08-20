import React from 'react'
import { authApi } from '../api-client'

interface Props {}

const LoginPage = (props: Props) => {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'test123',
        password: '123123',
      })
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
      await authApi.logout()
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button style={{ margin: '2px' }} onClick={handleLoginClick}>
        Login
      </button>
      <button style={{ margin: '2px' }} onClick={handleGetProfileClick}>
        Get Profile
      </button>
      <button style={{ margin: '2px' }} onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  )
}

export default LoginPage
