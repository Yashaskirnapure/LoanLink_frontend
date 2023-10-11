import React, { useState } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handeSubmit = async (e) => {
    e.preventDefault();
    if(email === '' || password === ''){
        toast.error('Please input all fields!!', {
          position: toast.POSITION.TOP_RIGHT
        })
      return;
    }
  }

  return (
    <div>
      <div className='form-wrapper'>
        <div className='login container'>
          <h1 className='form-heading'>Login</h1>
          <form className='form' action="">
            <input
              type="text"
              placeholder='Email'
              className='single-input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              className='single-input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              className='submit-button'
              onClick={handeSubmit}
            >Submit</button>
          </form>
          <p className='form-footer'>
            Haven't registered yet?
            <Link to={'/signup'}> Sign Up </Link>
          </p>
          <p className='home-link'>
              <Link to={'/'}> Go Back </Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login