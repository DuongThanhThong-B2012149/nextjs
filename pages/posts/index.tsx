import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

interface PostListPageProps {
  posts: any[]
}

const PostListPage = ({ posts }: PostListPageProps) => {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post: any, index: any) => (
          <Link key={index} href={`/posts/${post.id}`} prefetch={false}>
            <li
              style={{
                border: '1px solid #ccc',
                padding: '8px',
                margin: '8px',
                cursor: 'pointer',
              }}
            >
              <a>{post.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // Server-side
  // Build time
  console.log('Static props')
  const response = await fetch('http://js-post-api.herokuapp.com/api/posts?_page=1')
  const data: any = await response.json()
  return {
    props: {
      posts: data?.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}

export default PostListPage
