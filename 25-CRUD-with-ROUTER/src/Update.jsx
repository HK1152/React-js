import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaSave } from 'react-icons/fa'

function Update() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [value, setValue] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then((res) => {
        setValue(res.data)
      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/users/' + id, value)
      .then(() => {
        navigate('/')
      })
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
      {/* Header */}
      <header className='bg-white shadow-md'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex items-center gap-4'>
            <Link 
              to='/' 
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
            >
              <FaArrowLeft className='text-xl text-gray-600' />
            </Link>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>Update User</h1>
              <p className='text-gray-600 mt-1'>Edit user information</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white rounded-xl shadow-md p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Full Name
              </label>
              <input 
                type="text" 
                value={value.name}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all'
                onChange={(e) => setValue({ ...value, name: e.target.value })} 
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Username
              </label>
              <input 
                type="text" 
                value={value.username}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all'
                onChange={(e) => setValue({ ...value, username: e.target.value })} 
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Email Address
              </label>
              <input 
                type="email" 
                value={value.email}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all'
                onChange={(e) => setValue({ ...value, email: e.target.value })} 
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                Phone Number
              </label>
              <input 
                type="tel" 
                value={value.phone}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all'
                onChange={(e) => setValue({ ...value, phone: e.target.value })} 
              />
            </div>

            <div className='flex gap-4 pt-4'>
              <button 
                type='submit' 
                className='flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                <FaSave />
                Save Changes
              </button>
              <Link 
                to='/' 
                className='flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200'
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Update
