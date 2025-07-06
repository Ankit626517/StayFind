import React from 'react'
import HotelList from './HotelList'
import Hero from './Hero'
import About from '../components/About'
import AnimatedSearchBar from "../pages/AnimatedSearchBar"

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
    <AnimatedSearchBar/>
      {/* <About /> */}

      {/* Background Image */}
      <HotelList />
      
    </>
  )
}

export default Home
