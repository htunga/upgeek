import React from 'react'
import './Dashleft.css'
import pp from './../../Resources/pp.png'
import aa from './../../Resources/Lpro.png'
import a from './../../Resources/Lnot.png'
import b from './../../Resources/Lmess.png'
import c from './../../Resources/Lfol.png'
import d from './../../Resources/Lexp.png'
import uImage from './../../Resources/User.png'
import AllowedUser from '../../components/AllowedUsers/AllowedUser'

function Dashleft() {
  return (
    <div className='Dashleft'>
            <div className='big'>
              <div className='up-left'><img src={pp} alt=''/></div>
              <div className='mid-left'>
              <div className='Licons'>
              <img  src={aa} alt = ''/>
              <img  src={a} alt = ''/>
              <img  src={b} alt = ''/>
              <img  src={c} alt = ''/>
              <img  src={d} alt = ''/>
              </div>
              </div>
              <div className='low-left'>
                <h1>Authorized Users</h1>
                  <AllowedUser
                  name= "Ifigo Luanda"
                  image={uImage}
                  />
                  <AllowedUser
                  name= "Emiliana Kabyl"
                  image={uImage}
                  />
                  <AllowedUser
                  name= "Robyl Sumuana"
                  image={uImage}
                  />
                  <h2>View All</h2>
              </div>
            </div>
          </div>
  )
}

export default Dashleft