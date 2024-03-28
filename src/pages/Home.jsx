import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import HomeExplanantion from '../components/HomeExplanantion'
import HomeSteps from '../components/HomeSteps'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <HomeExplanantion/>
        <HomeSteps/>
        <Footer/>
    </>
  )
}

export default Home