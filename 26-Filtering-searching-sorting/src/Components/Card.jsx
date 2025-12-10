import React, { useState } from 'react'
import { Heart, ShoppingCart, Eye } from 'lucide-react'

function Card({ name, price, img }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className='group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className='relative overflow-hidden aspect-4/3'>
        <img 
          src={img} 
          alt={name}  
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className='bg-white p-3 rounded-full hover:bg-red-50 transition-all transform hover:scale-110 shadow-lg'>
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
          </button>
          <button className='bg-white p-3 rounded-full hover:bg-blue-50 transition-all transform hover:scale-110 shadow-lg'>
            <Eye className='w-5 h-5 text-gray-700' />
          </button>
          <button className='bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110 shadow-lg'>
            <ShoppingCart className='w-5 h-5 text-white' />
          </button>
        </div>

        {/* Sale Badge */}
        <div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
          New
        </div>
      </div>

      {/* Product Info */}
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
          {name}
        </h3>
        
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <span className='text-2xl font-bold text-blue-600'>
              ₹{price.toLocaleString()}
            </span>
            <span className='text-sm text-gray-500 line-through'>
              ₹{(price * 1.2).toLocaleString()}
            </span>
          </div>
          
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md text-sm font-medium'>
            Add to Cart
          </button>
        </div>

        {/* Rating */}
        <div className='flex items-center gap-1 mt-3'>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className='w-4 h-4 fill-yellow-400' viewBox='0 0 20 20'>
              <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
            </svg>
          ))}
          <span className='text-sm text-gray-600 ml-1'>(4.5)</span>
        </div>
      </div>
    </div>
  )
}

export default Card