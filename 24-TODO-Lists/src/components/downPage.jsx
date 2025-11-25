import React, { useState } from 'react'

function DownPages({ lists = [], setLists }) {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingValue, setEditingValue] = useState('')

  const deleteData = (index) => {
    const copy = [...lists]
    copy.splice(index, 1)
    setLists(copy)
  }

  const startEdit = (index) => {
    setEditingIndex(index)
    setEditingValue(lists[index].data)
  }

  const cancelEdit = () => {
    setEditingIndex(null)
    setEditingValue('')
  }

  const saveEdit = (index) => {
    const value = editingValue.trim()
    if (!value) return
    const copy = [...lists]
    copy[index] = { ...copy[index], data: value }
    setLists(copy)
    setEditingIndex(null)
    setEditingValue('')
  }

  return (
    <section className="bg-white shadow-sm rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className='text-2xl font-semibold text-gray-800'>Your Lists</h2>
        <span className='text-sm text-gray-500'>{lists.length} items</span>
      </div>

      {(!lists || lists.length === 0) ? (
        <div className='p-8 text-center text-gray-500'>
          No tasks yet — add something to get started.
        </div>
      ) : (
        <div className='space-y-3'>
          {lists.map((list, index) => (
            <div key={index} className='flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition'>
                <div className='flex-1'>
                  {editingIndex === index ? (
                    <input
                      className='w-full p-2 border rounded'
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                    />
                  ) : (
                    <>
                      <div className='text-gray-800 font-medium'>{list.data}</div>
                      
                    </>
                  )}
                </div>

              <div className='text-sm text-gray-500 w-28 text-right'>{list.newtime}</div>

              <div className='flex gap-2'>
                {editingIndex === index ? (
                  <>
                    <button type="button" onClick={() => saveEdit(index)} className='bg-green-600 text-white px-3 py-1 rounded'>Save</button>
                    <button type="button" onClick={cancelEdit} className='bg-gray-300 text-gray-800 px-3 py-1 rounded'>Cancel</button>
                  </>
                ) : (
                  <>
                    <button type="button" onClick={() => startEdit(index)} className='bg-yellow-400 text-white px-3 py-1 rounded'>Edit</button>
                    <button type="button" onClick={() => deleteData(index)} className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default DownPages