import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Banner from '../components/Banner'
import HomeExplanantion from '../components/HomeExplanantion'
import Pricing from '../components/Pricing'
import HomeSteps from '../components/HomeSteps'

function Home() {
  return (
    <>
    <Navbar/>
        <Banner/>
        <HomeExplanantion/>
        <Pricing/>
        <HomeSteps/>
    <Footer/>
    </>
  )
}

export default Home