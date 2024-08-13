import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
