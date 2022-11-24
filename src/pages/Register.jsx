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

    const [name, setname] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function handleName(event){
        console.log("dalila");
        setEmail(event.currentTarget.value);

    }

    function handlePassword(event) {
        console.log('EVENT', event);
        setPassword(event.currentTarget.value);
    }

    function handleEmail(event) {
        console.log('EVENT', event);
        setEmail(event.currentTarget.value);
    }

    async function submit() {
        console.log('Submit',name, userName, email, password, );
        await dispatch(createSession({name, userName, email, password}));

        if (success) {
        // redirect to home page
        navigate('/home');
        }
        
    }


    return <div className='container'>
        { isLoading ? <h1>Carregando...</h1> :
            <div>
            <Navbar title = "Labo Móvel" /> 
            <div className='register-form'>
                <form>
                    <h2 id="register-form-title">Regista-se</h2>
                    <div className="mb-1" >
                        <label for="exampleName" className="form-label">Nome completo</label>
                        <input type="text" placeholder="Digite seu nome completo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-1" >
                        <label for="exampleInputUserName" className="form-label">UsuáNameio</label>
                        <input type="text" placeholder="Crie seu nome de usuário" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-1">
                        <label for="exampleInputEmail1"  className="form-label">Digite seu email</label>
                        <input type="email" placeholder="Digite o seu email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                
                    <div className="mb-1">
                        <label for="exampleInputPassword1" className="form-label">Palavra passe</label>
                        <input type="password" placeholder="Crie a sua palavra-passe" className="form-control" id="exampleInputPassword1" />
                    
                    </div>
                    <div className="mb-1">
                        <label for="exampleConfirmPassword1" className="form-label">Confirmar palavra-passe</label>
                        <input type="Password"  placeholder="Confirme a sua palavra-passe"  className="form-control" id="exampleInputPassword1" />
                    </div>
                        <a id="register-link" href="/login">Já tenho uma conta</a>        
                    <button type="submit" id="register-btn" className="btn btn-primary" onClick={handleName}>Registar</button>
                </form>
                <Footer />
            </div>
            </div>
        }
    </div>
  
}

export default Register