import React from 'react'
import Header from '../Components/Header'
import SpacalityMeny from '../Components/SpacalityMeny'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'

function Home() {
  return (
    <div>
      <Header/>
      <SpacalityMeny/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home
