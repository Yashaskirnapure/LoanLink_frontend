import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar-items'>
            <Link to={`/login`}>
              <li className='list-item'>Login</li>
            </Link>
            <Link to={`/signup`}>
              <li className='list-item second-list-item'>Signup</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar;