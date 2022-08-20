import StudentDetail from '@/components/swr/StudentDetail'
import React, { useState } from 'react'

interface Props {}

const SWRPage = (props: Props) => {
  const [list, setList] = useState([1, 1, 1])
  const handleClick = () => {
    setList([...list, 1])
  }
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleClick}>Click</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SWRPage
