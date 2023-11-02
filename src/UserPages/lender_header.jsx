import React from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom"
import { Button, Heading } from '@chakra-ui/react'
import logo from '../public/loanlink-logo-zip-file (1)/png/logo-no-background.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className="navigation">
        <div className='logo' style={{padding: '20px'}}>
          <img src={logo} alt="" />
        </div>
        <a className='nav-button'>
          <Link to={'/lender'}>Dashboard</Link>
        </a>
        <a className='nav-button'>
          <Link to={'/lenderstatus'}>Check Status</Link>
        </a>
        <a className='nav-button'>
            <Link to={'/list'}>Browse Loan</Link>
        </a>
        <a className='nav-button logout'>
          Logout
        </a>
      </div>
    </div>
  )
}

export default Header