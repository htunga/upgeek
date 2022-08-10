import React from 'react'
import './Similar.css'

const Similar=(props)=> {
  return (
    <div>
        <div className='Similars'>
            <img className='img-simi' src= {props.image} alt = ''/>
            <h1 className='name-simi'>{props.name}</h1>
            <h2 className='content-simi'>{props.content}</h2>
            <button className='view-simi'>View More</button>
        </div>
    </div>
  )
}

export default Similar