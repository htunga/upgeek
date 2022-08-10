import React from 'react'
import { Link } from 'react-router-dom'
import './Page1.css'
import logo from './../Resources/logo.png'
import sta from './../Resources/st1.png'
import staa from './../Resources/st2.png'
import staaa from './../Resources/st3.png'
import logoo from './../Resources/upgeek.png'
import pers from './../Resources/person.png'
import light from './../Resources/light.png'
import test from './../Resources/tesimonyPic.png'
import TestimonyCard from '../components/Testimony/TestimonyCard'
import Firstimg from '../Resources/tesimonyImg.png'



function Page1() {
  return (
    <div className='First-Page'>
    <div className='upper-nav-bar'>
        <img className='upper-logo' src={logo} alt = ''/>
        <div className='h0'><h1>Home</h1></div>
        <div className='h2'><h1> Discover</h1></div>
        <div className='h3'><h1> FAQ</h1></div>
        <div className='Up-login'><Link to='/Login' id='Login'>Login</Link> 
        <button className='Sign-Button'>Sign Up</button>
    </div>

        <div className='First-Content1'>
    <h>connecting 
<h4>tech startup</h4>founders
 with the investors</h>
    </div>
    <div className='First-Content2'>
    <h>Join the largest social network of tech startups founder and investors in rwanda</h>
    </div>
    <button className='Gt-started-Button'>Get Started</button>
    </div>
    <div className='Numbering'/>
        <div className='Reg-start'><h4>1000</h4> Registered startups</div>
        <div className='Reg-invest'><h4>1700</h4> Registered investors</div>
        <div className='Reg-board'><h4>1080</h4> Startups funded</div>
    
        <img className='Front-logo' src={logoo} alt = ''/>

    <section>
    <svg  width="1336" height="1900" viewBox="0 0 1336 958" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M377.565 221.4C250.847 80.6044 65.0082 21.4986 -1 0V958H1329.16C1335.83 874.103 1345.17 621.169 1329.16 596C1309.16 564.539 1111 642 937 569.296C773.157 500.836 541.522 403.571 377.565 221.4Z" fill="url(#paint0_radial_314_90)"/>
<path d="M788.915 286.001C890.696 252.401 1246.49 25.3349 1338 26.0016V958H1V602L12.1603 592C157.988 522 446.964 407.601 516.604 398.001C603.654 386.001 661.688 328.001 788.915 286.001Z" fill="url(#paint1_linear_314_90)"/>
<defs>
<radialGradient id="paint0_radial_314_90" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(668.5 479) rotate(90) scale(479 669.5)">
<stop stop-color="#F8DB76" stop-opacity="0.7"/>
<stop offset="1" stop-color="#F8DB76" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint1_linear_314_90" x1="1883.22" y1="398" x2="893.326" y2="966.958" gradientUnits="userSpaceOnUse">
<stop stop-color="#B8CDF5" stop-opacity="0.64"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
<h2 className='Trend-heading'>Trending Startups</h2>
        <div className='Cards'>
        <card className='Card1'>
            <img src={sta}alt=''/>
            <h4 className='Topic'>reb reality</h4>
            <p className='Content'>Premium virtual reality (VR) hardware accessories purchasable in a VR online shopping environment</p>
            <button className='View-more'>View More</button>
            <button className='Hot-Deal'>Hot Deal</button>
        </card>
        <card className='Card1'>
            <img src={staa}alt=''/>
            <h4 className='Topic1'>Halo Hydra</h4>
            <p className='Content1'>Creator of premium, low sugar electrolyte hydration products</p>
            <button className='View-more1'>View More</button>
            <button className='Hot-Deal1'>Hot Deal</button>
        </card>
        <card className='Card1'>
            <img src={staaa}alt=''/>
            <h4 className='Topic2'>Cyrto Corporation</h4>
            <p className='Content2'>Biopharmaceutical company developing novel therapies for osteoarthritis and other inflammatory diseases</p>
            <button className='View-more2'>View More</button>
            <button className='Hot-Deal2'>Hot Deal</button>
        </card>
        </div>
        <div className='Upgeek-work'>
        <div className='Upgeek-Title'>
            <h>How<h4>UpGeek</h4>works</h>
    </div>
            <card className='Upgeek-work1'>
                <img id = 'p1'src={light}alt=''/>
                <div className='Side-content'>
                <h1>Are you an Enterprenuer?</h1>
                <h6>Make your startup the next big thing. don’t stress over Looking for investors to pitch your tech startup to, Upgeek gets news of your venture to the largest crowd of investors in Rwanda</h6>
                </div>
            </card>
            <card className='Upgeek-work2'>
                <img id = 'p11' src={pers}alt=''/>
                <div className='Side-content'>
                <h1>Are you an Investor?</h1>
                <h6>Find tech startups that pull at your heart strings, invest in startups that matter to you the most.</h6>
                </div>
            </card>
        </div>
    <div className='Test-monials'>
        <h>Testimonials</h>
        <div>
            <div className='Outer-frame'>
                <div className='Mid-frame'>
                <img id = 'test' src={test}alt=''/>
                <div className='Mid-content'>
                Eu hac blandit malesuada ante magna phasellus ipsum. Varius sagittis, arcu gravida nibh blandit nulla. Nibh nibh suscipit cursus eget aliquam. At.
                </div>
                <div className='Low-content'>
                  <h7>mucttylobrine21@gmail.com
                         muctty  lobrine</h7>  
                </div>
            </div>
            <div className="different">
                <div className='testimony-card1'>
                <TestimonyCard 
                    name="Tunga Tunga"
                    image={Firstimg}
                    />
                </div>
                <div className='testimony-card2'>
                    <TestimonyCard id='one-test'
                    name="Emmanuel"
                    image={Firstimg}
                    className='testimony-card'
                    />
                </div>
                    <TestimonyCard id='two-test'
                    name="Tunga Tunga"
                    image={Firstimg}
                    className='testimony-card'
                    />
                    <TestimonyCard id='three-test'
                    name="Tunga Tunga"
                    image={Firstimg}
                    className='testimony-card'
                    />
                    <TestimonyCard id='four-test'
                    name="Tunga Tunga"
                    image={Firstimg}
                    className='testimony-card'
                    />
            </div>
            </div>
        </div>

    </div>
    </section>
    <div className='Footer'>
    <svg width="1330" height="298" viewBox="0 0 1336 298" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1336" height="298" fill="url(#paint0_linear_194_11)" />
<defs>
<linearGradient id="paint0_linear_194_11" x1="1194.45" y1="6.7508" x2="465.382" y2="678.056" gradientUnits="userSpaceOnUse">
<stop stop-color="#E49B66"/>
<stop offset="0.473575" stop-color="#233985" stop-opacity="0.71"/>
<stop offset="1" stop-color="#22979E"/>
</linearGradient>
</defs>
</svg>
<h8 id='abt'>About</h8>
        <input type="text" className='email' />
        <button className='foot-submit'>Submit</button>
    </div>
    </div>
  )
}

export default Page1