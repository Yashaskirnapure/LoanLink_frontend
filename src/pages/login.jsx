import React, { useState } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import axios from '../api/axios';
import { useToast } from '@chakra-ui/react'
import bcrypt from 'bcryptjs';
import logo from '../public/loanlink-logo-zip-file (1)/png/logo-no-background.png'

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handeSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, role)
    if(email === '' || password === '' || role === null){
      toast({
        title: 'Error.',
        description: "Please input all fields.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
      const response = await axios.post(
        /*backend api*/
        JSON.stringify({email, password, hash}),{
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        }
      )

      console.log(response.data);
      console.log(response.accessToken);
      setEmail('')
      setPassword('')
      setRole(null)
      toast({
        title: 'Login Successful.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      {/*sessionStorage.setItem('user', JSON.stringify())*/}
      if (role === "lender") {
        navigate("/lender");
      } else if (role === "borrower") {
        navigate("/borrower");
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: "Something went wrong. Please try again.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <div>
      <div className='form-wrapper background-tint'>
        <div className='login container'>
          <h1 className='form-heading'>Login</h1>
          <form className='form' action="">
            <input
              type="text"
              value={email}
              placeholder='Email'
              className='single-input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
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
    </div>
  )
}

export default Login