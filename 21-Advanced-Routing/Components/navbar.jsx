import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full flex items-center justify-between p-8 bg-cyan-700 '>
        <h1 className='font-bold text-black text-2xl'>HK 1152</h1>
        <div className='font-bold text-black text-2xl '>
            <Link className='ml-2' to={'/'}>Home</Link>
            <Link className='ml-2' to={'/about'}>About</Link>
            <Link className='ml-2' to={'/course'}>Course</Link>
            <Link className='ml-2'to={'/prodect'}>Prodect</Link>

        </div>
    </div>
  )
}

export default Navbar