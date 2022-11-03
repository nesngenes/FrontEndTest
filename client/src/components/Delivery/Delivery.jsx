import React from 'react'
import './delivery.css'
import { CMSdev, DigitalProductDesign, Maintenance, Payment, WebDev, MobileApps } from '../../assets'

const Delivery = () => {

  const services = [
    {
      "image": WebDev,
      "serviceName": "Website development",
      "description": "High-performance website to reach out more your potential customers",
    },
    {
      "image": MobileApps,
      "serviceName": "Mobile apps development",
      "description": "To accelerate your business process",
    },
    {
      "image": DigitalProductDesign,
      "serviceName": "Digital product design",
      "description": "Complete digital product creations from UX prototyping to final UI designs",
    },
    {
      "image": Maintenance,
      "serviceName": "Maintenance",
      "description": "Make sure your digital environment keep online and updated",
    },
    {
      "image": CMSdev,
      "serviceName": "CMS development",
      "description": "You can update your website content yourself",
    },
    {
      "image": Payment,
      "serviceName": "Integrated payment gateway",
      "description": "Simplify the payment system with just one step",
    },
  ]

  return (
    <div className='container'>
      <div className='delivery'>

        <div className='headlines'>
          <p className='pageInfo'>Complete Package</p>
          <h2 className='second-heading'>From product design to software continuous delivery</h2>
        </div>

        <div className='grid'>
          {services.map((service) => (
            <div className='service'>
              <img src={service.image} alt={service.image} />
              <h3>{service.serviceName}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Delivery