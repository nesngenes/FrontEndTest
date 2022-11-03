import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './app.css'
import LandingPage from './components/LandingPage/LandingPage';
import Delivery from './components/Delivery/Delivery';
import TechStack from './components/TechStack/TechStack';
import Portfolio from './components/Portfolio/Portfolio';
import Testi from './components/Testi/Testi';
import Auth from './components/Auth/Auth';
import RedirectPage from './components/RedirectPage/RedirectPage';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';


const App = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <BrowserRouter>
        <Navbar />
      
      <Routes>
        <Route path="/" exact element={<Navigate to="/albatech" />} />
        <Route path="/albatech" exact element={
          <>
            <LandingPage /> 
            <Delivery /> 
            <TechStack /> 
            <Portfolio /> 
            <Testi />
            <Brand />
            <Footer />
          </>
        } />
        <Route path="/albatech/auth" exact element={<Auth  />}/>
        <Route path="/albatech/mypage" exact element={<RedirectPage  />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;