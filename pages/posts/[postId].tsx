import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface PostDetailProps {
  post: any
}

const PostDetail = ({ post }: PostDetailProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1 style={{ fontSize: '2rem', textAlign: 'center', color: '#fff' }}>Loading...</h1>
  }
  if (!post) return null
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS')
  const response = await fetch('http://js-post-api.herokuapp.com/api/posts?_page=1')
  const data: any = await response.json()
  return {
    paths: data?.data?.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('GET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }
  const response = await fetch(`http://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data: any = await response.json()
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}

export default PostDetail
