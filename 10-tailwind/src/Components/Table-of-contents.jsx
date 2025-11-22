import React from 'react'
import TableStar from './table-star'

function Table() {
  return (
    <div className='lg:px-130 pt-20'>
      <button className='border rounded-4xl px-3 py-2 text-blue-700 font-medium'>01 | Table of contents</button>
      <h1 className='mt-5 text-3xl font-bold'>Get a look at all of the content covered in the book. Everything you need to know is inside.</h1>
      <p className='mt-3 text-xl'>“Everything Starts as a Square” is comprised of 240 tightly edited, highly visual pages designed to teach you everything you need to know about icon design with no unnecessary filler.</p>
      <h2 className='mt-10 text-2xl font-medium'>Getting started</h2>
      <div className='mt-7   px-7 py-10 rounded-2xl bg-gray-50 flex flex-col flex-nowrap gap-3'>
        <div className='flex justify-between border-b border-gray-300 pb-3'>
          <p className='font-medium'>Getting started</p>
          <p className='text-gray-500'>1</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-3'>
          <p className='font-medium'>Intro to Figma</p>
          <p className='text-gray-500'>15</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-1'>
          <p className='font-medium'>Setting up your first artboard</p>
          <p className='text-gray-500'>20</p>
        </div>
      </div>


      <h2 className='mt-10 text-2xl font-medium'>Fundamentals</h2>
      <div className='mt-7   px-7 py-10 rounded-2xl bg-gray-50 flex flex-col flex-nowrap gap-3'>
        <div className='flex justify-between border-b border-gray-300 pb-3'>
          <p className='font-medium'>Strokes and fills</p>
          <p className='text-gray-500'>21</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-3'>
          <p className='font-medium'>End points</p>
          <p className='text-gray-500'>22</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-1'>
          <p className='font-medium'>Bezier curves</p>
          <p className='text-gray-500'>26</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-1'>
          <p className='font-medium'>Designing on a grid</p>
          <p className='text-gray-500'>31</p>
        </div>
        <div className='flex justify-between border-b border-gray-300 pb-1'>
          <p className='font-medium'>Vector shapes</p>
          <p className='text-gray-500'>45</p>
        </div>
      </div>
      
    </div>
  )
}

export default Table