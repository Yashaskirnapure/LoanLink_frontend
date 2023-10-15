import React from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handeSubmit = async (e) => {
    e.preventDefault();
    if(email === '' || password === '' || fullname === '' || confirmPassword === ''){
       toast.error('Please input all fields!!', {
            position: toast.POSITION.TOP_RIGHT
        })
       return;
    }
    if(password !== confirmPassword){
        toast.error('Passwords do not match!!', {
          position: toast.POSITION.TOP_RIGHT
        })
        return;
    }

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!EMAIL_REGEX.test(email)){
        toast.error('Please enter valid Email id!!', {
          position: toast.POSITION.TOP_RIGHT
        })
        return;
    }

    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-]).{8,}$/;
    if(!PWD_REGEX.test(email)){
        toast.error('The passwords should be at least 8 characters long and should contain at least one lowercase letter, one uppercase letter, one digit, and one special character.', {
          position: toast.POSITION.TOP_RIGHT
        })
        return;
    }

    try {
        const response = await axios.post(
            /*backend api*/
            JSON.stringify({ fullname, email, password}),{
                headers: { 'Content-Type' : 'application/json'},
                withCredentials: true
            }
        )
        console.log(response.data)
        console.log(response.accessToken)
        toast.success('Registration successful',{
            position: toast.POSITION.TOP_RIGHT
        })
    } catch (err) {
        toast.error('Something went wrong',{
            position: toast.POSITION.TOP_RIGHT
        })
    }

    //clear input fields after submit
    setFullname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div>
        <div className='form-wrapper background-tint'>
            <div className='register container'>
                <h1 className='form-heading'>Register</h1>
                <form className='form' action="">
                    <input 
                        type="text"
                        placeholder='Full Name'
                        onChange={(e) => {setFullname(e.target.value)}}
                    />
                    <input
                        type="text"
                        placeholder='Email'
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
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
                    >
                        Submit
                    </button>
                </form>
                <p className='form-footer'>
                    Already have an account?
                    <Link to={'/login'}> Login </Link>
                </p>
                <p className='home-link'>
                    <Link to={'/'}> Go Back </Link>
                </p>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Signup