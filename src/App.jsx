import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SignIn from './pages/SignIn'

import Home from './pages/Home'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>  
        <Route path ='/signin' element={<SignIn/>}/>  
      </Routes>
      <Footer/>
    </>
  )
}

export default App
