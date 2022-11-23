import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const Login = () => {


  return (
      <>
        <Navbar title = "Labo Móvel"  />
          <div  className='login-form'>
              <form>
                <h2 id="login-form-title">Login</h2>
                <div class="mb-2">
                  <label for="exampleInputEmail1" className="form-label" required >Endereço de email</label>
                  <input type="email" placeholder="Digite o seu email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              
                </div>
                <div class="mb-2">
                  <label for="exampleInputPassword1" className="form-label" required >Palavra passe</label>
                  <input type="password"  placeholder="Digite a sua palavra-passe" class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" id="login-btn" className="btn btn-primary">Entrar</button>
                <a href="target_blank" id="login-link">Esqueci-me da palavra-passe</a>
              </form>
          </div>
          <Footer />
      </>

  )
}
     
export default Login;
