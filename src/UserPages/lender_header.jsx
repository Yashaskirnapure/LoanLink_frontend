import React from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom"
import { Button, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <div className="navigation">
        <Button className='nav-button'>
          <Link to={'/lender'}>Dashboard</Link>
        </Button>
        <Button className='nav-button'>
          <Link to={'/lenderstatus'}>Check Status</Link>
        </Button>
        <Button className='nav-button'>
            <Link to={'/list'}>Browse Loan</Link>
        </Button>
        <Button
          className='nav-button'
          backgroundColor={'darkred'}
          color={'white'}
        >Logout</Button>
      </div>
    </div>
  )
}

export default Header