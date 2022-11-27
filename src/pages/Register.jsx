import React, { useState } from 'react'
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../slices/auth';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';

const Register = () => {
    
    const isLoading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const success = useSelector((state) => state.auth.success);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    
    function handleName(event){
        console.log("EVENT", event.currentTarget.value);
        setName(event.currentTarget.value);
    }
    function handleUserName(event){
        console.log("EVENT", event.currentTarget.value);
        setUserName(event.currentTarget.value);

    }

    function handleEmail(event) {
        console.log('EVENT', event.currentTarget.value);
        setEmail(event.currentTarget.value);
    }

    function handlePassword(event) {
        console.log('EVENT', event.currentTarget.value);
        setPassword(event.currentTarget.value);
    }

    function handleConfirmedPassword(event) {
        setConfirmedPassword(event.currentTarget.value);
        confirmedPassword === password ? console.log('your password is valid') : wrongPassword()
                   
    }

     const wrongPassword = () => {
        return console.log("wrong password")
    }

    async function formSubmit(event) {
        event.preventDefault();
        console.log('Submit',{name, userName, email, password} );

        if(confirmedPassword === password) {
            await dispatch(createUser({name, userName, email, password}))
        };

        if (success) {
        // redirect to home page
        navigate('/homepage');
        }
        
    }
    

    return <div className=''>
        { isLoading ? <h1>Carregando...</h1> :
            <div>
            <Header title = "Labo Móvel" /> 
            <NavMenu />
            <div className='register-form'>
                <form onSubmit={formSubmit}>
                    <h2 id="register-form-title">Regista-se</h2>
                    <div className="mb-1" >
                        <label for="exampleName" className="form-label">Nome completo</label>
                        <input onChange={handleName} type="text" placeholder="Digite seu nome completo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
                    </div>
                    <div className="mb-1" >
                        <label for="exampleInputUserName" className="form-label">Usuário</label>
                        <input type="text" placeholder="Crie seu  nome de usuário" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserName} required />
                    </div>
                    <div className="mb-1">
                        <label for="exampleInputEmail1"  className="form-label">Digite seu email</label>
                        <input type="email" placeholder="Digite o seu email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} required />
                    </div>
                
                    <div className="mb-1">
                        <label for="exampleInputPassword1" className="form-label">Palavra passe</label>
                        <input type="password" placeholder="Crie a sua palavra-passe" className="form-control" id="exampleInputPassword1" onChange={handlePassword} required minLength={8} />
                    
                    </div>
                    <div className="mb-1">
                        <label for="exampleConfirmPassword1" className="form-label">Confirmar palavra-passe</label>
                        <input type="Password"  placeholder="Confirme a sua palavra-passe"  className="form-control" id="exampleInputPassword1" onChange={handleConfirmedPassword} required minLength={8} />
                    </div>
                        <a id="register-link" href="/login">Já tenho uma conta</a>        
                    <button type="submit" id="register-btn" className="btn btn-primary">Registar</button>
                </form>
            </div>
            <Footer />  
            </div>
        }
    </div>
  
}

export default Register