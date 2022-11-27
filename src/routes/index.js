import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import App from '../pages/App'

function index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<Register/>}/> 
                <Route path='/login' element={<Login/>}/>
                <Route path='/app' element={<App/>}/>
                <Route path='/cart' element={<Register/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
  
export default index;