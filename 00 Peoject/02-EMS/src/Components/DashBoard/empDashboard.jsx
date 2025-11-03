import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmpDashboard(Props) {
  // console.log(data);
  
  return (
    <div className='bg-[#1c1c1c] h-screen px-10'>
        <Header changeUser={Props.changeUser}  data={Props.data}/>
        <TaskListNumber data={Props.data}/>
        <TaskList data={Props.data}/>
    </div>
  )
}

export default EmpDashboard