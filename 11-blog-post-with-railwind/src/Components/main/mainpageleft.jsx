import React from 'react'
import { ArrowUpRight } from 'lucide-react'
export default function Mainpageleft() {
  return (
    <div className='flex flex-col justify-between   w-2/6 h-200 '>
        <div className='p-16'>
            <h1 className='text-7xl font-semibold mb-7'>Prospective <br /> customer <br />segmentation</h1>
        <p className='text-xl mt-4 pr-12 leading-[2]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique velit excepturi laboriosam magnam in, perferendis sequi ipsam dolor blanditiis libero adipisci nobis iure, rem vitae!</p>
    
        </div>
        <ArrowUpRight  size={150} strokeWidth={1.75} />
    </div>
  )
}
