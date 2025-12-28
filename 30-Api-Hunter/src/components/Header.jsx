import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Create from "./Create";

function Header({ onBookAdded, SearchValue, setSearchValue }) {
  const [showCreate, setShowCreate] = useState(false);
  

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl mb-8 p-6 border border-white/20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold text-white mb-4 md:mb-0 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          📚 Book Management App
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <motion.input
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            type="text"
            value={SearchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search books..."
            className="px-6 py-3 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm shadow-lg"
          />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 shadow-xl font-semibold"
            onClick={() => setShowCreate(!showCreate)}
          >
            {showCreate ? '❌ Cancel' : '➕ Add Book'}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {showCreate && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <Create onBookAdded={onBookAdded} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
