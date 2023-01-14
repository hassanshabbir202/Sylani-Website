import React from 'react'
import Cources from '../Cources/Cources'
import HeroSec from '../HeroSection/HeroSec'
import FetchData from '../realtimeData/FetchData'

const Home = () => {
  return (
    <>
      <HeroSec/>
      <div><Cources/></div>
      <FetchData/>
    </>
  )
}

export default Home
