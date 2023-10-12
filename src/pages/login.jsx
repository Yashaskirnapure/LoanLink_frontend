import React, { useState } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';

import useAuth from '../lib/useAuth'

const Login = () => {
  const { setAuth } = useAuth();

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

    try {
      const response = await axios.post(
        /*backend api*/
        JSON.stringify({email, password}),
        {
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        }
      )
      console.log(response.data);
      toast.success('Login Successful', {
        position: toast.POSITION.TOP_RIGHT
      })
      {/*localStorage.setItem('user', JSON.stringify())*/}
    } catch (err) {
      toast.error('Login Failed', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <div className='form-wrapper background-tint'>
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