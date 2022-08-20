import axiosClient from '@/api/axios-client'
import React from 'react'
import useSWR from 'swr'

interface Props {
  studentId: any
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000
const StudentDetail = ({ studentId }: Props) => {
  // Nếu muốn định nghĩa fetcher thì xài theo kiều này
  // const {data} = useSWR(`ABCD`,() => axiosClient.get(`students/${studentId}`))

  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    // revalidateOnMount: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
  })

  const handleMutateClick = () => {
    mutate({ name: 'Herocode dev' }, true)
  }
  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  )
}

export default StudentDetail
