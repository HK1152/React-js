import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

function Book({ book, onBookDeleted, onBookUpdated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(book.title);
  const [editAuthor, setEditAuthor] = useState(book.author);
  const [editCategory, setEditCategory] = useState(book.category);
  const [editPrice, setEditPrice] = useState(book.price);
  const [editRating, setEditRating] = useState(book.rating);
  const [editImage, setEditImage] = useState(book.image);

  const DeleteBook = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        if (onBookDeleted) onBookDeleted();
      })
      .catch(error => {
        console.error('Error deleting book:', error);
        alert('Error deleting book');
      })
  }

  const UpdateBook = () => {
    axios.put(`http://localhost:3000/books/${book.id}`, {
      title: editTitle,
      author: editAuthor,
      category: editCategory,
      price: parseFloat(editPrice),
      rating: parseFloat(editRating),
      image: editImage
    })
    .then(() => {
      setIsEditing(false);
      if (onBookUpdated) onBookUpdated();
    })
    .catch(error => {
      console.error('Error updating book:', error);
      alert('Error updating book');
    })
  }

  const startEdit = () => {
    setIsEditing(true);
  }

  const cancelEdit = () => {
    setIsEditing(false);
    setEditTitle(book.title);
    setEditAuthor(book.author);
    setEditCategory(book.category);
    setEditPrice(book.price);
    setEditRating(book.rating);
    setEditImage(book.image);
  }

  if (isEditing) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden max-w-sm p-6 border border-white/20"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold mb-6 text-white"
        >
          ✏️ Edit Book
        </motion.h2>
        <form className="space-y-4">
          <motion.input 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            type="text" 
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)} 
            placeholder='Title' 
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm"
            required
          />
          <motion.input 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            type="text" 
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)} 
            placeholder='Author' 
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm"
            required
          />
          <motion.select 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)} 
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white backdrop-blur-sm"
            required
          >
            <option value="" className="bg-slate-800">Select Category</option>
            <option value="Self Help" className="bg-slate-800">Self Help</option>
            <option value="Finance" className="bg-slate-800">Finance</option>
            <option value="Productivity" className="bg-slate-800">Productivity</option>
          </motion.select>
          <motion.input 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            type="number" 
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)} 
            placeholder='Price' 
            step="0.01"
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm"
            required
          />
          <motion.input 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            type="number" 
            value={editRating}
            onChange={(e) => setEditRating(e.target.value)} 
            placeholder='Rating' 
            step="0.1"
            min="0"
            max="5"
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm"
            required
          />
          <motion.input 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            type="url" 
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)} 
            placeholder='Image URL' 
            className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm"
            required
          />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-3 pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button" 
              onClick={UpdateBook}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 font-medium shadow-xl"
            >
              💾 Save Changes
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button" 
              onClick={cancelEdit}
              className="flex-1 bg-gradient-to-r from-gray-500 to-slate-500 text-white py-3 px-4 rounded-xl hover:from-gray-600 hover:to-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 font-medium shadow-xl"
            >
              ❌ Cancel
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden max-w-sm border border-white/20 hover:border-purple-400/50 group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={book.image}
          alt={book.title}
          className="w-full h-56 object-cover"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
        />
        {/* <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg"
        >
          ⭐ {book.rating}
        </motion.div> */}
      </div>
      <div className="p-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors"
        >
          {book.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-sm mb-1"
        >
          👤 {book.author}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-sm mb-3"
        >
          📂 {book.category}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center"
        >
          <span className="text-2xl font-bold text-green-400">
            ${book.price}
          </span>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 pt-0 flex space-x-2"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-xl hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 font-medium shadow-xl"
          onClick={startEdit}
        >
          ✏️ Edit
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-4 rounded-xl hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 font-medium shadow-xl" 
          onClick={() => DeleteBook(book.id)}
        >
          🗑️ Delete
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Book;
