import React from 'react'
import './AllowedUsers.css'
import image from './../../Resources/Viewv.png'

const AllowedUser= (props) => {
  return (
    <div className='AllowedUser'>
        <div className='Authorised'>
                <img id='userImg' src={props.image} alt=''/>
            <h7 className='userName'>{props.name}</h7>
            <img id='view' src={image} alt=''/>
            </div>
        
    </div>
  )
}

export default AllowedUser