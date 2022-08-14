import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

const ParamsPage = (props: Props) => {
  const router = useRouter()

  return (
    <div>
      <h1>Params page</h1>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  )
}

export default ParamsPage
