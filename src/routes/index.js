import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import MyApp from '../pages/MyApp'
import HomePage from '../pages/HomePage';
function index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MyApp/>}/>
                <Route path='/register' element={<Register/>}/> 
                <Route path='/login' element={<Login/>}/>
                <Route path='/homepage' element={<HomePage/>}/>
                <Route path='/cart' element={<Register/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
  
export default index;