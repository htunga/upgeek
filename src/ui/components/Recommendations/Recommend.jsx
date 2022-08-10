import React from 'react'
import './Recommend.css'

const Recommend= (props) =>{
  return (
    <div>
        <div className='Recommendations'>
            <img className='img-reco' src= {props.image} alt = ''/>
            <h1 className='name-reco'>{props.name}</h1>
            <h2 className='content-reco'>{props.content}</h2>
            <button className='view-reco'>View More</button>
        </div>
    </div>
  )
}
export default Recommend