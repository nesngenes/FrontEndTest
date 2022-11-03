import React from 'react'
import { user } from '../../assets'
import './testi.css'

const Testi = () => {

    const testimonials = [
        {
            "sender": "Amazing people",
            "quote": "They are people who are not only following the tasks, but can work as a team. Together.",
            "fullName": "Matthijs Piëst",
            "job": "COO at WieBetaaltWat",
            "image": user
        },
        {
            "sender": "Amazing people",
            "quote": "They are people who are not only following the tasks, but can work as a team. Together.",
            "fullName": "Matthijs Piëst",
            "job": "COO at WieBetaaltWat"
        },
        {
            "sender": "Amazing people",
            "quote": "They are people who are not only following the tasks, but can work as a team. Together.",
            "fullName": "Matthijs Piëst",
            "job": "COO at WieBetaaltWat"
        },
        {
            "sender": "Partnership approach",
            "quote": "We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.",
            "fullName": "Matthijs Piëst",
            "job": "COO at WieBetaaltWat",
            "image": user
        },
        {
            "sender": "Amazing people",
            "quote": "They are people who are not only following the tasks, but can work as a team. Together.",
            "fullName": "Matthijs Piëst",
            "job": "COO at WieBetaaltWat",
        },
    ]

  return (
    <div className='container'>
        <div className='headlines'>
          <p className='pageInfo'>Testimonials</p>
          <h2 className='second-heading'>What clients love in working with Albatech Team</h2>
        </div>
        
        <div className='testimonials-grid'>
            {testimonials.map((testi) => (
                <div className='testimonial'>
                    <h3 className='testiHead'>{testi.sender}</h3>
                    <p className='testi-quotes'>"{testi.quote}"</p>
                    <div className='userProfile'>
                        {testi.image && (
                            <img src={testi.image} alt={testi.image}/>
                        )}
                        <div className='userProfileInfo'>
                            <p className='testi-fullName'>{testi.fullName}</p>
                            <p className='testi-job'>{testi.job}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='petikBawah'></div>
        <div className='petikAtas'></div>
        <div className='dots24'></div>
        <div className='dots25'></div>

    </div>
  )
}

export default Testi