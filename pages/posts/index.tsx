import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

interface Props {
  posts: any[]
}

const PostListPage = ({ posts }: Props) => {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post: any, index: any) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  // Server-side
  // Build time
  console.log('Static props')
  const response = await fetch('http://js-post-api.herokuapp.com/api/posts')
  const data: any[] = await response.json()
  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}

export default PostListPage
