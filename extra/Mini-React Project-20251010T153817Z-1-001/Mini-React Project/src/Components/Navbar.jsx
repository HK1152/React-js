import React from 'react'

function Navbar({cartValue,cartClick}) {
  return (
    <div className='navbar'>
        <h1>Amazon</h1>
        <button onClick={cartClick}>Cart ({cartValue})</button>
    </div>
  )
}

export default Navbar