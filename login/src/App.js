import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './component/login';
import Head from './component/Head';
import Ls from './component/logsin';
import Home from './component/home';
import Signup from './component/signup';

function App() {

  let s =localStorage.getItem('email')==null;

  if (s) {
    return <div>
       
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/singup' element={<Signup/>}/>
      </Routes>
      </div> 
  }
  else{
    return  <Head/>
    
  
  }
  
    

}

export default App;
