import React from 'react'
import HotelList from './HotelList'
import Hero from './Hero'
import About from '../components/About'
import AnimatedSearchBar from "../pages/AnimatedSearchBar"
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
    <SearchBar/>
      {/* <About /> */}

      {/* Background Image */}
      <HotelList />
      
    </>
  )
}

export default Home
