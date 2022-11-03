import React from 'react'
import {aws,cloud,angular,css,html,nodejs,php,python,react,ruby,postgre,mysql,sql,mongodb} from '../../assets'
import './techstack.css'

const TechStack = () => {
    
    const technologies = [aws,cloud,angular,css,html,nodejs,php,python,react,ruby,mongodb,postgre,mysql,sql]

  return (
  <>
    <div className='container'>
      <div className='technologies'>{technologies.map((tech) => (
          <div className='technology'>
              <img src={tech} alt={tech} />
          </div>
          ))}
      </div>
      
    </div>

    <div className='total-services'>
      <h2 className='yellow-heading'>Our Progress Comes with a Collaboration Between</h2>
      <h2 className='yellow-heading yellow-heading-break'>Creativity, Ideas, and Technology</h2>
      <div className='total-services-content'>
        <div className='quantity'>
          <h2>1000+</h2>
          <p>Designs</p>
        </div>
        <div className='quantity'>
          <h2>30+</h2>
          <p>Products</p>
        </div>
        <div className='quantity'>
          <h2>58+</h2>
          <p>Website Developments</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default TechStack