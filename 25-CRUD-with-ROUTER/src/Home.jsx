import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaEye, FaUserPlus, FaSearch } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"
import { ImBin } from "react-icons/im"

function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        setData(res.data)
      })
  }, [])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(() => {
          setData(data.filter(item => item.id !== id))
        })
    }
  }

  const filteredData = data.filter((item) => {
    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
  })

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
      {/* Header */}
      <header className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>User Management</h1>
              <p className='text-gray-600 mt-1'>Manage your users efficiently</p>
            </div>
            <Link 
              to='/Create' 
              className='flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            >
              <FaUserPlus className='text-lg' />
              Add User
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Search Bar */}
        <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
          <div className='relative'>
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input 
              type="text" 
              placeholder='Search users by name...' 
              onChange={(e) => setSearch(e.target.value)} 
              className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all'
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500'>
            <h3 className='text-gray-600 text-sm font-semibold uppercase'>Total Users</h3>
            <p className='text-3xl font-bold text-gray-900 mt-2'>{data.length}</p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500'>
            <h3 className='text-gray-600 text-sm font-semibold uppercase'>Search Results</h3>
            <p className='text-3xl font-bold text-gray-900 mt-2'>{filteredData.length}</p>
          </div>
          <div className='bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500'>
            <h3 className='text-gray-600 text-sm font-semibold uppercase'>Active</h3>
            <p className='text-3xl font-bold text-gray-900 mt-2'>{data.length}</p>
          </div>
        </div>

        {/* Table */}
        <div className='bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>ID</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Name</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Username</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Email</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider'>Phone</th>
                  <th className='px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50 transition-colors'>
                      <td className='px-6 py-4 text-sm font-medium text-gray-900'>{item.id}</td>
                      <td className='px-6 py-4 text-sm text-gray-900 font-semibold'>{item.name}</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>{item.username}</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>{item.email}</td>
                      <td className='px-6 py-4 text-sm text-gray-600'>{item.phone}</td>
                      <td className='px-6 py-4'>
                        <div className='flex justify-center gap-2'>
                          <Link 
                            to={`/Read/${item.id}`} 
                            className='p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                            title='View Details'
                          >
                            <FaEye className='text-lg' />
                          </Link>
                          <Link 
                            to={`/Update/${item.id}`} 
                            className='p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors'
                            title='Edit User'
                          >
                            <FaPenToSquare className='text-lg' />
                          </Link>
                          <button 
                            onClick={() => handleDelete(item.id)} 
                            className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                            title='Delete User'
                          >
                            <ImBin className='text-lg' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className='px-6 py-12 text-center text-gray-500'>
                      <div className='flex flex-col items-center'>
                        <FaSearch className='text-4xl mb-3 text-gray-300' />
                        <p className='text-lg font-semibold'>No users found</p>
                        <p className='text-sm'>Try adjusting your search criteria</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-white border-t border-gray-200 mt-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <p className='text-center text-gray-600'>© 2024 User Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
