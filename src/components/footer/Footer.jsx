import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/project'>Project</Link>
      <Link to='/service'>Service</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Footer