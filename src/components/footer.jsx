import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <h1 className='footer-heading'>GET STARTED</h1>
        <div className='section'>
            <p>
                Ready to revolutionize your financial journey?
                  <Link to={'/signup'} style={{ color: 'gold' }}> Sign Up </Link>
                today and become a part of our growing lending community!
            </p>
            <p>
              Already a member?
              <Link to={'/login'} style={{ color: 'gold'}}> Login </Link>
              now
            </p>
        </div>
    </footer>
  )
}

export default Footer;