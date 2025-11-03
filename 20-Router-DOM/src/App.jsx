import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './componats/home.jsx'
import About from './componats/about.jsx'
import Navbar from './componats/navbar.jsx'

function App() {

  return (
    <>
    
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    </>
  )
}

export default App
