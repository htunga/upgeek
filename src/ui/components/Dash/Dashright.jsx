import React from 'react'
import './Dashright.css'

import Recommend from '../../components/Recommendations/Recommend'
import Similar from '../../components/Similars/Similar'
import i from './../../Resources/RecImage.png'
import ii from './../../Resources/SimImage.png'
import iii from './../../Resources/SSimImage.png'

function Dashright() {
  return (
    <div className='Dashright'>
    <div className='Upperght'>
    <h3>Recommended For You</h3>
      <div className='Recommendations'>
        <Recommend
        image={i}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
        <Recommend
        image={i}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
        <Recommend
        image={i}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
      </div>
      <h2>View All</h2>
    </div>
    <div className='Lowerght'>
      <h3>Similar Startups</h3>
      <div className='Similars'>
        <Similar
        image={ii}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
         <Similar
        image={iii}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
         <Similar
        image={ii}
        name="medical im"
        content="Condimentum lobortis netus arcu mauris, id amet elementum, euismod. Pellentesque."
        />
      </div>
      {/* <h2>View All</h2> */}
    </div>
    <h1>Powered By Upgeek 2016</h1>
  </div>
  )
}

export default Dashright