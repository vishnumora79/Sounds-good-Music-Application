import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />}/>
        <Route path='/main' element = {<ProtectedRoute><MainPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};


export default App;
