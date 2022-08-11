import React from 'react'
import './DashSubnav.css'

function DashSubnav() {
  return (
    <div>
      <div className='SubN'>
          <div className='SubNlft'>
            <h1 id='CreateP'>Create A Post</h1>
            <input type="text" placeholder='Enter Post Title' id='In'/>
            <input type="text" placeholder='Enter Post Description' id='Inn'/>
          <div className='Add'>
            <button className='AddImg'>Add Image</button>
            <button className='AddVid'>Add Video</button>
            </div>
            <button className='Publish'>Publish</button>
            </div>
          <div className='SubNrgt'>
            <h1 id='RegisterS'>Register Your Startup</h1>
            <div className='ContentS'>
            fill the following requirements
 and wait  for upgeek approval
            </div>
            <button id='FillF'>Fill The Form</button>
            <h4>it takes 4 days to be ePPROVED</h4>
            <button className='Reg'>Register Startup</button>
          </div>
        </div>
    </div>
  )
}

export default DashSubnav