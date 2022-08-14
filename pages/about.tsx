import { useRouter } from 'next/router'
import React from 'react'

interface Props {}

const About = (props: Props) => {
  const router = useRouter()
  console.log(router.query)
  return <div>About</div>
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default About
