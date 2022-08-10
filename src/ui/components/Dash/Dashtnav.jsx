import React from 'react'
import './Dashtnav.css'
import aa from './../../Resources/Home.png'
import a from './../../Resources/Status.png'
import b from './../../Resources/Chats.png'
import c from './../../Resources/Notification.png'
import d from './../../Resources/Stlogo.png'
// import s from './../../Resources/Isearch.png'
import logo from './../../Resources/logo.png'

function Dashtnav() {
  return (
    <div className='Dashtnav'>
            <div className='Big'>
            <img  className='lg' src={logo} alt = ''/>
              <div className='Icons'>
              <img  src={aa} alt = ''/>
              <img  src={a} alt = ''/>
              <img  src={b} alt = ''/>
              <img  src={c} alt = ''/>
              </div>
                 <div className='Others'>
                    <div >
                    {/* <img className='S' src={s} alt = ''/> */}
                      <input type="search" className='Search'placeholder='search' ></input>
                      </div>
                    <div className='StaInfo'>
                    <img className='Stpic' src={d} alt = ''/>
                        <div className='Name'>@Ceo Account</div>
                        <div className='Address'>ceoaccount@gmail.com</div>
                    </div>
                 </div> 
            </div>
        </div>
  )
}

export default Dashtnav