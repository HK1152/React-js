import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import BookLists from './components/BookLists'
import Header from './components/Header'

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [SearchValue, setSearchValue] = useState('')

  const fetchBooks = () => {
    setLoading(true)
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(SearchValue.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Header onBookAdded={fetchBooks} SearchValue={SearchValue} setSearchValue={setSearchValue} />
        <AnimatePresence mode="wait">
          <motion.div
            key={loading ? 'loading' : error ? 'error' : 'content'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <BookLists books={filteredBooks} loading={loading} error={error} onBookDeleted={fetchBooks} onBookUpdated={fetchBooks} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-slate-800 text-white text-center py-4 mt-8"
      >
        <p>&copy; 2025 Book Management App. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}

export default App
