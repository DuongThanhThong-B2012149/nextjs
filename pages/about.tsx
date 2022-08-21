import Header from '@/components/common/Header'
import { AdminLayout } from '@/components/layout'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NextPageWithLayout } from '../models'

interface Props {}
// const Header = dynamic(() => import('@/components/common/Header'), { ssr: false })
const About: NextPageWithLayout = (props: Props) => {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log('About query', router.query)
  const page = Number(router.query?.page)
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`http://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data: any = await response.json()
      setPostList(data.data)
    })()
  }, [page])

  const handlNextPage = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <>
      <h1>About page</h1>
      <Header />
      <ul>
        {postList.map((post: any, i: number) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handlNextPage}>Next Page</button>
    </>
  )
}

About.Layout = AdminLayout

export const getStaticProps = (context: GetStaticPropsContext) => {
  console.log('GET STATIC PROPS')
  return {
    props: {}, // will be passed to the page component as props
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default About
