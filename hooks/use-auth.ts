import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'
import { authApi } from '../api-client'

export function useAuth(options?: Partial<PublicConfiguration>) {
  // Profile
  const {
    data: profile,
    mutate,
    error,
  } = useSWR('/profile', {
    // revalidateOnMount:false,
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 100, // 1hr
    ...options,
  })
  const login = async () => {
    await authApi.login({
      username: 'test123123',
      password: '123123',
    })

    await mutate()
  }
  const logout = async () => {
    await authApi.logout()
    await mutate({}, false)
  }
  return {
    profile,
    error,
    login,
    logout,
  }
}
