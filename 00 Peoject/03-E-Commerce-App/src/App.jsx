import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase"
import Dashboard from './Dashboard'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg font-medium">Loading your experience...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={user ? <Dashboard /> : <Login />} />
      </Routes>
    </Router>
  )
}

export default App
