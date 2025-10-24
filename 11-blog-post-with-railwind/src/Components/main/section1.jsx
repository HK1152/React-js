import React from 'react'
import Navbar from '../main/navbar.jsx'
import MainPage from '../main/mainpage.jsx'
export default function Section1(prorp) {
    
    
    
  return (
    <>
    <Navbar />
     <MainPage  users={prorp.users} />
    
    </>
  )
}
