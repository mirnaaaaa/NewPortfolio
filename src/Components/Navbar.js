import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='link' to="/">
      <p className='handleItems'>Home</p>
      </Link>
      <Link to="/Projects" className='link'>
      <p className='handleItems'>Projects</p>
      </Link>
    </div>
  )
}
