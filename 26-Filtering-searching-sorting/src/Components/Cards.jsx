import React from 'react'
import Card from './Card'
import { Package } from 'lucide-react'

function Cards({ Prodects }) {
  return (
    <div className='flex-1 p-6'>
      {/* Results Header */}
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>Our Products</h2>
          <p className='text-gray-600 mt-1'>
            Showing {Prodects?.length || 0} {Prodects?.length === 1 ? 'product' : 'products'}
          </p>
        </div>
        
        {/* Sort Dropdown */}
        <select className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      {/* Products Grid */}
      {Prodects && Prodects.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {Prodects.map((product) => (
            <Card 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              img={product.image} 
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className='flex flex-col items-center justify-center py-20 text-center'>
          <Package className='w-20 h-20 text-gray-300 mb-4' />
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>No products found</h3>
          <p className='text-gray-500'>Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  )
}

export default Cards