import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';


const Home = () => {

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
          <Navbar title='Labo Móvel' handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} handleCartClick={handleCartClick} />
          
        </div>
      
        <div>
          <Slideshow />
        </div>
        <Footer />
    </div>
  )
}

export default Home;


