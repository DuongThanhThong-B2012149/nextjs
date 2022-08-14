import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Props {}

const About = (props: Props) => {
  const router = useRouter()
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   ;(async () => {
  //     const data = await axios.get('http://js-post-api.herokuapp.com/api/posts')
  //     setPosts(data.data)
  //   })()
  // }, [])
  console.log(router.query)

  return (
    <div>
      {/* <ul>
        {posts.map((x: any, i: number) => (
          <li key={i}>{x.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default About
