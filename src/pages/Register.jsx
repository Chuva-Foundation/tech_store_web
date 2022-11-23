import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSession } from '../slices/auth';

const Register = () => {
    const isLoading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const success = useSelector((state) => state.auth.success);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function handleNome(event)

    function handlePassword(event) {
        console.log('EVENT', event);
        setPassword(event.currentTarget.value);
    }

    function handleEmail(event) {
        console.log('EVENT', event);
        setEmail(event.currentTarget.value);
    }

    async function submit() {
        console.log('Submit', email, password);
        await dispatch(createSessione({ email, password}));

        if (success) {
        // redirect to home page
        navigate('/home');
        }
        
    }


    return <div className='container'>
        { isLoading ? <h1>Carregando...</h1> :
        // <Navbar title = "Labo Móvel" />
        <div className='register-form'>
            <form>
                <h2 id="register-form-title">Regista-se</h2>
                <div className="mb-1" >
                    <label for="exampleName" className="form-label">Nome completo</label>
                    <input type="email" placeholder="Digite seu nome completo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1" >
                    <label for="exampleInputUserName" className="form-label">Usuário</label>
                    <input type="email" placeholder="Crie seu nome de usuário" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-1">
                    <label for="exampleInputEmail1"  class="form-label">Digite seu email</label>
                    <input type="email" placeholder="Digite o seu email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
            
                <div className="mb-1">
                    <label for="exampleInputPassword1" className="form-label">Palavra passe</label>
                    <input type="password" placeholder="Crie a sua palavra-passe" class="form-control" id="exampleInputPassword1" />
                
                </div>
                <div className="mb-1">
                    <label for="exampleConfirmPassword1" className="form-label">Confirmar palavra-passe</label>
                    <input type="Password"  placeholder="Confirme a sua palavra-passe"  class="form-control" id="exampleInputPassword1" />
                </div>
                    <a id="register-link" href="/login">Já tenho uma conta</a>        
                <button type="submit" id="register-btn" class="btn btn-primary">Entrar</button>
            </form>
            <Footer />
        </div>

    }
    </div>
  
}

export default Register