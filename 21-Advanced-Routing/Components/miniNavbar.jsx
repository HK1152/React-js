import React from 'react'

import { useNavigate } from 'react-router-dom'


function MiniNavbar() {
    const goHome = useNavigate();
  return (
    <div className='w-full flex items-center justify-between p-8 bg-cyan-700 '>
         <button onClick={ ()=>{goHome('/')}} className='bg-green-800 rounded-2xl px-10 py-3 '> to go Home</button>
      <button onClick={ ()=>{goHome(-1)}} className='bg-green-800 rounded-2xl px-10 py-3 '>Back</button>
      <button onClick={ ()=>{goHome(+1)}} className='bg-green-800 rounded-2xl px-10 py-3 '>Next</button>
    </div>
  )
}

export default MiniNavbar