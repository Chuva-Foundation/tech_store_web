import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slideshow from '../components/ImageSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu'

const MyApp = () => {

const navigate = useNavigate();

const handleLoginClick = () => {
  navigate('/login');
}

const handleRegisterClick = () => {
  navigate('/register')

}

const handleCartClick = () => {
  navigate('/register')
}


  return (
    <div>
        <div>
          <Header title='Labo Móvel' handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} handleCartClick={handleCartClick} />
          <NavMenu />
        </div>
      
        <div>
          <Slideshow />
        </div>
        <Footer />
    </div>
  )
}

export default MyApp;


