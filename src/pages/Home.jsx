import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../components/Banner'
import HomeExplanantion from '../components/HomeExplanantion'
import HomeSteps from '../components/HomeSteps'

function Home() {
  return (
    <>
        <Banner/>
        <HomeExplanantion/>
        <HomeSteps/>
    </>
  )
}

export default Home