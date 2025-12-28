import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

function Create({ onBookAdded }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/books', {
            title: title,
            author: author,
            category: category,
            price: parseFloat(price),
            rating: parseFloat(rating),
            image: image
        })
        .then(response => {
            alert('Book added successfully! 🎉');
            setTitle('');
            setAuthor('');
            setCategory('');
            setPrice('');
            setRating('');
            setImage('');
            if (onBookAdded) onBookAdded();
        })
        .catch(error => {
            console.error('Error adding book:', error);
            alert('Error adding book ❌');
        })
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
        >
            <motion.h2 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold mb-6 text-center text-white"
            >
                📚 Add New Book
            </motion.h2>
            <form className="space-y-5" onSubmit={submit}>
                <motion.input 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='Book Title' 
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm transition duration-300"
                    required
                />
                <motion.input 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    type="text" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} 
                    placeholder='Author Name' 
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm transition duration-300"
                    required
                />
                <motion.select 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    name="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} 
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white backdrop-blur-sm transition duration-300"
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    placeholder='Price ($)' 
                    step="0.01"
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm transition duration-300"
                    required
                />
                <motion.input 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    type="number" 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)} 
                    placeholder='Rating (0-5)' 
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm transition duration-300"
                    required
                />
                <motion.input 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    type="url" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)} 
                    placeholder='Cover Image URL' 
                    className="w-full px-4 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm transition duration-300"
                    required
                />
                <motion.button 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 font-semibold text-lg shadow-2xl"
                >
                    ➕ Add Book
                </motion.button>
            </form>
        </motion.div>
    )
}

export default Create