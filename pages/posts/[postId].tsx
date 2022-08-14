import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

const PostDetail = (props: Props) => {
  const router = useRouter()
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  )
}

export default PostDetail
