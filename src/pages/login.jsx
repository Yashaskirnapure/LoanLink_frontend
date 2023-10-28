import React, { useState } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';

import useAuth from '../lib/useAuth'

const Login = () => {
  const { setAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const navigate = useNavigate();

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
        JSON.stringify({email, password, role}),{
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        }
      )

      console.log(response.data);
      console.log(response.accessToken);
      toast.success('Login Successful', {
        position: toast.POSITION.TOP_RIGHT
      })
      {/*sessionStorage.setItem('user', JSON.stringify())*/}
      if (role === "lender") {
        navigate("/lender");
      } else if (role === "borrower") {
        navigate("/borrower");
      }
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
            <div className='role'
                onChange={(e) => {setRole(e.target.value)}}
            >
                <div>
                    <input type="radio" value="lender" name="role" />
                    <span> Lender </span>
                </div>
                <div>
                    <input type="radio" value="borrower" name="role" />
                    <span> Borrower </span>
                </div>
            </div>
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