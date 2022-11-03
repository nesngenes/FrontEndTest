import React from 'react'
import './landingpage.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>

        <div className='heading-text container'>
            <h1 className='title'>Build or scale up</h1>
            <span className='sub-title-2'>your development team</span>

            <div className='sub-title-3'>
                <div className='yellow-line' />
                <span>in weeks, not months</span>
            </div>

            <button className='primary-button'>Book now</button>
        </div>

        <div className='squareDots'></div>
        <div className='working-image'></div>
        <div className='rectDots'></div>
    </div>
  )
}

export default LandingPage