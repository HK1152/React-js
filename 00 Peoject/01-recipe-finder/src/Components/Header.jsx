function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Recipe Finder
        </h1>
        
        <div className="flex-1 max-w-md mx-8">
          <input 
            className="w-full px-4 py-2.5 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400 transition-all duration-300" 
            type="text" 
            placeholder="Search recipes..." 
          />
        </div>
        
        <nav className="flex gap-8 font-semibold text-gray-300">
          <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Home</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">About</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header