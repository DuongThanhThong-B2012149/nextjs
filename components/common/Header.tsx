import React from 'react'

interface Props {}

const Header = (props: Props) => {
  console.log('render header')
  return <div className="header">Header</div>
}

export default Header
