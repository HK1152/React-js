import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Prodect() {
  return (
   <>
    <div className='flex gap-5 text-3xl'>
      <Link to={'/prodect/men'}>Men</Link>
      <Link to={'/prodect/women'}>Women</Link>
    </div>
    <Outlet />
   </>
  )
}

export default Prodect