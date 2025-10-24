import React from 'react'
import { CornerDownRight } from 'lucide-react';

export default function Navbar() {
  return (
    <>
    <div className= 'w-full h-full flex align-items-center justify-between  px-18 py-6'>
        <h2 className='bg-black rounded-full px-5 py-2 text-white uppercase font-semibold'>Target Audience</h2>
        <button className='bg-gray-200 text-black uppercase font-semibold px-4 py-2 rounded-full flex'><CornerDownRight /> Digital banking platform</button>
    </div>
   
    </>
  )
}
