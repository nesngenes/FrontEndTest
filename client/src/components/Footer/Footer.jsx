import React from 'react'
import {logo, fb, Ig, linkedIn} from '../../assets'
import './footer.css'

const Footer = () => {
  
  const socialMedia = [fb, Ig, linkedIn];

  return (
    <div className='container'>
      <div className='footer'>

        <div className='footer-content'>
          <img className='footer-alba-logo' src={logo} />
          <p className='footer-alba-info'>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</p>
          <div className='social'>
            {socialMedia.map((social) => (
              <img src={social} alt={social} />
            ))}
          </div>
        </div>

        <div className='footer-content footer-website'>
          <h3>Website</h3>
          <p>About</p>
          <p>Service</p>
          <p>Portofolio</p>
          <p>Blog</p>
          <p>Career</p>
        </div>

        <div className='footer-content'>
          <h3>Contact</h3>

          <p>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</p>
          <p><b>P: </b>+62 81 1889 3383</p>
          <p><b>E: </b>info@albatech.id</p>
        </div> 


      </div>

      <div className='trademark-allrights'>
        <p>©PT. Alba Digital Teknologi 2021 | All Rights Reserved</p>
        <p>Privacy policy | Terms of service</p>
      </div>
    </div>
    
  )
}

export default Footer