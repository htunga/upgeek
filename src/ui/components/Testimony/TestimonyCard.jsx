import React from 'react'
import './TestimonyCard.css'

const TestimonyCard = (props) => {
  return (
    <div className='All-testimony'>
        <div className='My-testimony'>
                <img id='testImg' src={props.image} alt=''/>
            <h7 className='testName'>{props.name}</h7>
            </div>
        </div>
  )
}

export default TestimonyCard