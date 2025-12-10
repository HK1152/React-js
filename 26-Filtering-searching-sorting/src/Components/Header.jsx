import { useState, useRef, useEffect } from 'react'
import { Heart, Search, ShoppingCart, Menu, X } from 'lucide-react';

function Header({ SearchValue, setSearchValue }) {
    const [showSearch, setShowSearch] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (showSearch) inputRef.current?.focus();
    }, [showSearch]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white'
        }`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <img className='h-10 w-auto hover:scale-105 transition-transform cursor-pointer' 
                             src="src/Image/01.png" alt="Logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex gap-8 text-base font-medium'>
                        {['Home', 'Product', 'Shop', 'About Us'].map((item) => (
                            <a key={item} href="#" 
                               className='text-gray-700 hover:text-blue-600 transition-colors relative group'>
                                {item}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className='flex items-center gap-4'>
                        {/* Search */}
                        <div className='flex items-center'>
                            <button 
                                onClick={(e) => { e.preventDefault(); setShowSearch(s => !s); }} 
                                className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                                aria-label='search'>
                                <Search className='w-5 h-5 text-gray-700' />
                            </button>
                            {showSearch && (
                                <input
                                    value={SearchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    ref={inputRef}
                                    type='text'
                                    placeholder='Search products...'
                                    className='ml-2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all animate-fadeIn'
                                    onKeyDown={(e) => { if (e.key === 'Escape') setShowSearch(false); }}
                                />
                            )}
                        </div>

                        {/* Wishlist */}
                        <button className='hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors relative group'>
                            <Heart className='w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors' />
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>0</span>
                        </button>

                        {/* Cart */}
                        <button className='hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors relative group'>
                            <ShoppingCart className='w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors' />
                            <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>0</span>
                        </button>

                        {/* Login Button */}
                        <button className='hidden sm:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5'>
                            Log in
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className='md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors'>
                            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className='md:hidden py-4 border-t animate-fadeIn'>
                        <nav className='flex flex-col gap-4'>
                            {['Home', 'Product', 'Shop', 'About Us'].map((item) => (
                                <a key={item} href="#" 
                                   className='text-gray-700 hover:text-blue-600 transition-colors py-2'>
                                    {item}
                                </a>
                            ))}
                            <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all mt-2'>
                                Log in
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header