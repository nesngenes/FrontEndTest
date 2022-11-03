import React from 'react'
import './portofolio.css'
import {ilios,homeandliving,hippo} from '../../assets'

const Portfolio = () => {

  const portofolios = [
    {
      "image": ilios,
      "app": "Mobile apps",
      "productName": "ILIOS app (B2B E-commerce)",
      "description": "Has a unique selling point where not all companies offer applications for sales, data collection and management."
    },
    {
      "image": homeandliving,
      "app": "Website development",
      "productName": "Home and Living",
      "description": "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living."
    },
    {
      "image": hippo,
      "app": "Website development",
      "productName": "HIPPO",
      "description": "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment."
    }
  ]

  return (
    <div className='container'>
      <div className='portofolio'>
        <div className='headlines'>
            <p className='pageInfo'>Portfolio</p>
            <h2 className='second-heading'>The software that we build takes our clients to the next level</h2>
          </div>

        <div className='portos'>
          {portofolios.map((porto) => (
            <div className='porto'>
              <img src={porto.image} alt={porto.image} />
              <div className='porto-text'>
                <p className='pageInfo'>{porto.app}</p>
                <h3 className='porto-name'>{porto.productName}</h3>
                <p>{porto.description}</p>
              </div>
            </div>
          ))}    
        </div>
        
        <div className='porto-button'>
          <button className='primary-button porto-button'>
            Learn more
          </button>
        </div>

      </div>

    </div>
  )
}

export default Portfolio