import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom"
import logo from '../public/loanlink-logo-zip-file (1)/png/logo-no-background.png'

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar-items'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
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