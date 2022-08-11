import React from 'react'
import { Link } from 'react-router-dom'
import NavBar1 from '../components/NavBar/NavBar1'

import './SigninX.css'

function SigninX() {
  return (
    <div className='SigninX'>
        <NavBar1/>
        <div className='Lg-1'>
          {/* <img  className='back' src={b}alt='' /> */}
          <h2 className='Start'>START FOR FREE</h2>
          <h3 className='Create'>Create a new account</h3>
          <h1 id='You'>Already have account!</h1>
        <h1 ><Link to='/Login' id='sign'>Log in</Link></h1>
          <div className='Names'>
          <input type='text'className='Fname' placeholder='First Name'required/>
            <input type='text'className='Oname' placeholder='Other Name'required/>
          </div>
          <input type='text' className='Email' placeholder='Email'required/>
          <h4 id='Birth'>Birthday</h4>
          <div className='BD'>
            <div className='Month'>Sept</div>
            <div className='Date'>12</div>
            <div className='Year'>2022</div>
          </div>
          <h5 id='Gen'>Gender</h5>
          <div className='Gender'>
          <input type= "radio" id="Female" className='Female'placeholder='Female' />
            <input type= "radio" id="Male" className='Male'placeholder='Male'/>
            
          </div>
          <input type='text' className='CrtPass'required/>
          <input type='text' className='ConPass'required/>
        <button className='Log-but'>Create Account</button>
        </div>
    </div>
  )
}

export default SigninX