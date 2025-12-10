import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaUserTag } from 'react-icons/fa'

function Read() {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then((res) => {
        setData(res.data)
      })
  }, [id])

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
              <h1 className='text-3xl font-bold text-gray-900'>User Details</h1>
              <p className='text-gray-600 mt-1'>View user information</p>
            </div>
          </div>
        </div>
      </header>

      {/* User Details */}
      <main className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          {/* Profile Header */}
          <div className='bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-center'>
            <div className='w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4'>
              <FaUser className='text-4xl text-indigo-600' />
            </div>
            <h2 className='text-3xl font-bold text-white'>{data.name}</h2>
            <p className='text-indigo-100 mt-2'>@{data.username}</p>
          </div>

          {/* Details Grid */}
          <div className='p-8 space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-indigo-100 rounded-lg'>
                    <FaUser className='text-indigo-600' />
                  </div>
                  <h3 className='text-sm font-semibold text-gray-600 uppercase'>Full Name</h3>
                </div>
                <p className='text-xl font-semibold text-gray-900'>{data.name}</p>
              </div>

              <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-green-100 rounded-lg'>
                    <FaUserTag className='text-green-600' />
                  </div>
                  <h3 className='text-sm font-semibold text-gray-600 uppercase'>Username</h3>
                </div>
                <p className='text-xl font-semibold text-gray-900'>{data.username}</p>
              </div>

              <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-blue-100 rounded-lg'>
                    <FaEnvelope className='text-blue-600' />
                  </div>
                  <h3 className='text-sm font-semibold text-gray-600 uppercase'>Email</h3>
                </div>
                <p className='text-xl font-semibold text-gray-900 break-all'>{data.email}</p>
              </div>

              <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                <div className='flex items-center gap-3 mb-3'>
                  <div className='p-2 bg-purple-100 rounded-lg'>
                    <FaPhone className='text-purple-600' />
                  </div>
                  <h3 className='text-sm font-semibold text-gray-600 uppercase'>Phone</h3>
                </div>
                <p className='text-xl font-semibold text-gray-900'>{data.phone}</p>
              </div>
            </div>

            <div className='flex gap-4 pt-4'>
              <Link 
                to={`/Update/${id}`}
                className='flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                Edit User
              </Link>
              <Link 
                to='/' 
                className='flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200'
              >
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Read
