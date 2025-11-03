import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className="main">
    <h1>ReLoading</h1>
    <a href="/">Home</a>
    <a href="/About">About</a>
   </div>
<br />
<br />

   <div className="main2">
    <h1>without Reloading</h1>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
   </div>
   
   </>
  )
}
