import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../../Frontend/src/components/Navbar'
import Home from '../../Frontend/src/pages/Home'
import Hero from '../../Frontend/src/pages/Hero'
import Login from '../../Frontend/src/pages/Login'
import Register from '../../Frontend/src/pages/Register'

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import HotelList from '../../Frontend/src/pages/HotelList'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      </BrowserRouter>
      <>
      
      </>
    </>
  )
}

export default App
