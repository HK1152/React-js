import React from 'react'
import { motion } from 'framer-motion'
import Book from './Book'

function BookLists({ books, loading, error, onBookDeleted, onBookUpdated }) {
  if (loading) return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col justify-center items-center py-16"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="rounded-full h-16 w-16 border-4 border-purple-400 border-t-transparent mb-4"
      ></motion.div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-white/80"
      >
        Loading books...
      </motion.span>
    </motion.div>
  );
  if (error) return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-red-400 text-6xl mb-4"
      >
        ⚠️
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-red-400 text-xl mb-4"
      >
        {error}
      </motion.div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-xl font-semibold"
        onClick={() => window.location.reload()}
      >
        Try Again
      </motion.button>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <motion.h2 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        📖 Your Book Collection
      </motion.h2>
      {books.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-16"
        >
          <motion.p 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 text-xl"
          >
            No books found. Add your first book! 📚
          </motion.p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Book book={book} onBookDeleted={onBookDeleted} onBookUpdated={onBookUpdated} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default BookLists