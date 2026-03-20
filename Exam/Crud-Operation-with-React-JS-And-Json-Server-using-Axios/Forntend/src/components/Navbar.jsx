import React from 'react'

function Navbar({ onAddUserClick, onHomeClick }) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">Hk contect</div>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick?.(); }} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onAddUserClick?.(); }} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add User</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar