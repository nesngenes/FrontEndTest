import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './auth.css'

import {signin} from '../../actions/auth'

const initialState = {email: '', password: ''}

const Auth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(signin(formData, navigate))

    }

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h1>Login</h1>
      
      <input 
        name='email'
        onChange={handleChange}
        required
        placeholder='E-mail'
        type='email'
        autoFocus
      />

      <input
        name='password'
        onChange={handleChange}
        required
        placeholder='Password'
        type='password'
      />

      <button type='submit' className='primary-button'>Sign In</button>
      
    </form>
  )
}

export default Auth