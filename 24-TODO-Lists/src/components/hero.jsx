import React, { useEffect, useState } from 'react'
import UpPage from './up'
import DownPages from './downPage'

function Hero() {
  const [lists, setLists] = useState(() => {})

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists])


  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700">My Todo Lists</h1>
        </header>

        <UpPage lists={lists} setLists={setLists} />
        <DownPages lists={lists} setLists={setLists} />
      </div>
    </main>
  )
}

export default Hero