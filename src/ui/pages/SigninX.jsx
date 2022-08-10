import React from 'react'
import { Link } from 'react-router-dom'
import NavBar1 from '../components/NavBar/NavBar1'
import './SigninX.css'

function SigninX() {
  return (
    <div className='SigninX'>
        <NavBar1/>
        <div className='Lg-1'>
          <div className='Log-head'>Create An Account</div>
          <div className='Bd'>
          </div>
          <div className='Gnder'>
          </div>
          <div className='Category'>
          </div>
          <div className='CrtPass'></div>
        <div className='ConPass'></div>
        <button className='Log-but'>Next</button>
        <h1 id='You'>You don't have account</h1>
        <h1 id='sign'><Link to='/Login'><i>Log in</i></Link></h1>
        </div>
    </div>
  )
}

export default SigninX