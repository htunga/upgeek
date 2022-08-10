import React from 'react'
import { Link } from 'react-router-dom'
import NavBar1 from '../components/NavBar/NavBar1'
import './Login1.css'


const Login1 = () => {
  return (
    <div className='Login'>
      <NavBar1/>
    <div className='Lg-1'>
        <div className='Log-head'>Login</div>
        <input type="text" className='Input1'placeholder='Email' required></input>
        <input type="text" className='Input2' placeholder='Password' required></input>
        <button className='Log-but'>Login</button>
        <h1 id='Forgot'>Forgot Password?</h1>
        <h1 id='You'>You don't have account</h1>
        <h1 id='sign'><Link to='/SigninX'><i>Sign in</i></Link></h1>
        
    </div>
    </div>
  )
}

export default Login1
