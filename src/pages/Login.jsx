import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSession } from '../slices/auth';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';


function Login() {
  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePassword(event) {
    console.log('EVENT', event.currentTarget.value);
    setPassword(event.currentTarget.value);
  }

  function handleEmail(event) {
    console.log('EVENT', event.currentTarget.value);
    setEmail(event.currentTarget.value);
  }

  async function submit(e) { 
    e.preventDefault()
    console.log('Submit', {email, password});
    await dispatch(createSession({ email, password}));

    if (success) {
      // redirect to home page
      navigate('/home');
    }
    
  }

  return <div className=''>
    { isLoading ? <h1>Loading...</h1> :
      <div className='content'>
        <Header title = "Labo Móvel"  />
        <NavMenu />
          <div  className='login-form'>
              <form onSubmit={submit}>
                <h2 id="login-form-title">Login</h2>
                <div class="mb-2">
                  <label for="exampleInputEmail1" className="form-label"  >Endereço de email</label>
                  <input type="email" placeholder="Digite o seu email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} required />
                </div>
                <div class="mb-2">
                  <label for="exampleInputPassword1" className="form-label"   >Palavra passe</label>
                  <input type="password" placeholder="Digite a sua palavra-passe" class="form-control" id="exampleInputPassword1" onChange={ handlePassword } required minLength={8} />
                </div>
                <button type="submit" id="login-btn" className="btn btn-primary">Entrar</button>
                <a href="target_blank" id="login-link">Esqueci-me da palavra-passe</a>
              </form>
          </div>
          <Footer />
          <span>{error && error.message }</span>
          <span>{success && 'Login Success' }</span>
          
      </div>
    }
      </div>
  
}
     
export default Login;
