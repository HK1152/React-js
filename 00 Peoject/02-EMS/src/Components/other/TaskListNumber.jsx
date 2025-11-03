import React from 'react'

function TaskListNumber({ data }) {
    // If parent passed no data yet, use safe defaults to avoid runtime errors
    // const numbers = data && data.taskNumbers
    //     ? data.taskNumbers
    //     : { newTask: 0, completed: 0, active: 0, failed: 0 };

    return (
        <div className='flex mt-10 flex-wrap justify-between gap-5'>
            <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>

            <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber