import React from 'react'
import MainPageLeft from './mainpageleft.jsx'
import Mainpageright from './mainpageright.jsx'
export default function MainPage(prorp) {
  // console.log(prorp);
  return (
    <>
    <div className='h-auto flex px-5'>
      <MainPageLeft />
    <Mainpageright users={prorp.users} />
    </div>
    </>
  )
}
