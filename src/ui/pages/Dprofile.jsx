import React from 'react'
import Dashleft from '../components/Dash/Dashleft'
import Dashright from '../components/Dash/Dashright'
import Dashtnav from '../components/Dash/Dashtnav'



import './Dprofile.css'

const Dprofile = () => {
  return (
    <div className='Dprofile'>
        <Dashtnav/>
        <Dashleft/>
        <Dashright/>
       
    </div>
  )
}

export default Dprofile