import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
  
  const [userData,setUserData] = useContext(AuthContext)
  

  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-10 rounded h-90 '>
      <div className='bg-neutral-900  mb-2 w-full py-4 px-4 rounded flex justify-between '>
        <h2 className='w-1/5 text-gray-950 '>Employee name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>
      </div>
      


      <div className='h-[80%] overflow-auto '>
        {userData.map((e,index)=>{
          return  <div key={index} className='bg-cyan-950 mb-2 w-full py-4 px-4 rounded flex justify-between'>
        <h2 className='w-1/5 '>{e.firstName}</h2>
        <h3 className='w-1/5 '>{e.taskNumbers.newTask}</h3>
        <h5 className='w-1/5 '>{e.taskNumbers.active}</h5>
        <h5 className='w-1/5 '>{e.taskNumbers.completed}</h5>
        <h5 className='w-1/5 '>{e.taskNumbers.failed}</h5>
      </div>
      })}
      </div>



     
      {/* <div className='bg-yellow-400 mb-2 w-full py-4 px-4 rounded flex justify-between '>
        <h2 className='w-1/5 '>Employee name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>
      </div>
      <div className='bg-blue-400 mb-2 w-full py-4 px-4 rounded flex justify-between'>
        <h2>HK1152</h2>
        <h3>Make a ui design</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-purple-400 mb-2 w-full py-4 px-4 rounded flex justify-between'>
        <h2>HK1152</h2>
        <h3>Make a ui design</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-sky-400 mb-2 w-full py-4 px-4 rounded flex justify-between'>
        <h2>HK1152</h2>
        <h3>Make a ui design</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-orange-400 mb-2 w-full py-4 px-4 rounded flex justify-between'>
        <h2>HK1152</h2>
        <h3>Make a ui design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
    
  )
}

export default Alltask
