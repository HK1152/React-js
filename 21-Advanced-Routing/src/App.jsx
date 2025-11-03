import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/navbar.jsx'
import Home from '../Components/home.jsx'
import About from '../Components/about.jsx'
import Prodect from '../Components/prodect'
import Footer from '../Components/Footer.jsx'
import NotFound from '../Components/NotFound.jsx'
import Men from '../Components/men.jsx'
import Women from '../Components/Women.jsx'
import CourseDetails from '../Components/Coursedetails.jsx'
import Course from '../Components/Course.jsx'
import MiniNavbar from '../Components/miniNavbar.jsx'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex flex-col bg-black text-white justify-between'>
        <div>
          <Navbar />
        <MiniNavbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course/' element={<Course />} />
          <Route path='/course/:id' element={<CourseDetails />} />
          <Route path='/prodect' element={<Prodect />} >
            <Route path='men' element={<Men />}></Route>
            <Route path='women' element={<Women />}></Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
