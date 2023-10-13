import React from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom"
import { Button, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className='header'>
        <ul className='header-items'>
          <Button>Go Back</Button>
          Available Loans
        </ul>
    </div>
  )
}

export default Header