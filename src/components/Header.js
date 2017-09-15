import React from 'react'

const Header = (props) => {
  return (
    <header className='top'>
      <h1>Catch of the day</h1>
      <h2 className='tagline'>{ props.tagline }</h2>
    </header>
  )
}

export default Header
