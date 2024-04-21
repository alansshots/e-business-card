import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import SuccessfulRegistration from './pages/SuccessfulRegistration';

import Dashboard from './pages/Dashboard';
import BusinessCard from './pages/Card';


function App() {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Home/>}/>  
        <Route path ='/sign-in' element={<SignIn/>}/>  
        <Route path ='/sign-up' element={<SignUp/>}/>  
        
        <Route path ='/dashboard/*' element={<Dashboard/>}/>  
        <Route path ='/card/:id' element={<BusinessCard/>}/>  
        <Route path ='/successful-registration' element={<SuccessfulRegistration/>}/>  
        
      </Routes>
    </>
  )
}

export default App
