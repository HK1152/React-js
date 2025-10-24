import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        done
      </button>
      <div className="mt-4 border p-4 rounded shadow-lg m-5">
        <p className="text-gray-600">This is a simple Tailwind CSS setup with Vite.</p>
      </div>
      <input type="text" className="border border-gray-300 p-2 rounded" />
    </>
  )
}

export default App
