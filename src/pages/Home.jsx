import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ContentLandingPage from '../components/ContentLandingPage'

function Home() {
  return (
    <>
    <Navbar/>
        <ContentLandingPage/>
    <Footer/>
    </>
  )
}

export default Home