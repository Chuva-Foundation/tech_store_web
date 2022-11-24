import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

function index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/> 
                <Route path='/cart' element={<Register/>}/> 

            </Routes>
        </BrowserRouter>
    )
}

export default index;