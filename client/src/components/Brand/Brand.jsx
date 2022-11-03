import React from 'react'
import {hippoLogo,halLogo, iliosLogo, dioLogo,melandas} from '../../assets'
import './brand.css'

const Brand = () => {

    const brands = [hippoLogo,halLogo, iliosLogo, dioLogo,melandas];

  return (
    <div className='container'>
      
      <div className='brands'>
          {brands.map((brand) => (
              <div className='brand'> 
                <img src={brand} alt={brand} />
              </div>
          ))}
      </div>

      <div></div>

      <div className='consultation'>
        <p className='consultation-small-heading'>Is software important for your business?</p>
        <p className='consultation-large-heading'>Build it with Albatech</p>
        <button className='consultation-button'>Consultation Now</button>
      </div>

    </div>
  )
}

export default Brand