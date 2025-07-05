import React from 'react'
import HotelList from './HotelList'
import Hero from './Hero'
import About from '../components/About'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Background Image */}
      <HotelList />
      
    </>
  )
}

export default Home
