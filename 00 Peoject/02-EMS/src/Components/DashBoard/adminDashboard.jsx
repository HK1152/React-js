import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'

function AdminDashboard(props) {
  return (
    <div className='h-full w-full bg-[#161616] p-7'>
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <Alltask />
    </div>
  )
}

export default AdminDashboard