import React from 'react'
import './NavBar1.css'
import { Link, } from 'react-router-dom'
import logo from './../../Resources/logo.png'

function NavBar1() {
  return (
    <div className='upper-nav-bar'>
    <img className='upper-logo' src={logo} alt = ''/>
    <Link to='/' ><h1 className='h0'>Home</h1></Link>
    <Link to ='/Dprofile'><h1 className='h2'>Discover</h1></Link>
    <div className='h3'><h1> FAQ</h1></div>
    <div className='Up-login'><Link to='/Login' id='Login'>Login</Link> 
    <button className='Sign-Button'>Sign Up</button></div>
    </div>
  )
}

export default NavBar1