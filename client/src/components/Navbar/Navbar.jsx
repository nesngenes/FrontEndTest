import React, {useState, useEffect} from 'react'
import {burger, logo} from '../../assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './navbar.css'

import {useDispatch, useSelector} from 'react-redux'

import decode from 'jwt-decode'
import { set } from 'mongoose'

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({type: 'LOGOUT'});

    navigate('/');

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    // JWT 

    if(token){
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return ( 
      <div className='navbar'>

           <div className='logoandburger'>
              <img src={logo} alt='albatech-logo' />
              <img onClick={() => setIsMobile(!isMobile)} className='burger' src={burger} alt={burger} />
            </div> 

            <div className={isMobile ? 'navbar-content-mobile' : 'navbar-content'}> 
              <Link to="/albatech">About</Link>
              <Link to="/albatech">Service</Link>
              <Link to="/albatech">Portfolio</Link>
              <Link to="/albatech">Blog</Link>
              <Link to="/albatech">Career</Link>

              {user ? (
                <>
                  <Link to="/albatech/mypage">My Page</Link>
                  <Link to="/albatech/auth" onClick={logout}>Logout</Link>
                </>
              ): (
                  <Link to="/albatech/auth">Login</Link>
              )}

              
              <button className='primary-button'>
                  <Link to="/albatech">Contact Us</Link>
              </button>
            </div>
      </div>
  )
}

export default Navbar