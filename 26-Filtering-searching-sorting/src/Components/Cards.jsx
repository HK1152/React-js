import { useState } from 'react'
import Card from './Card'
import { Package } from 'lucide-react'

function Cards({ Prodects }) {
  const [sortOption, setSortOption] = useState('featured')

  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  }

  const getSortedProducts = () => {
    if (!Prodects) return []
    
    const productsCopy = [...Prodects]
    
    switch (sortOption) {
      case 'price-low':
        return productsCopy.sort((a, b) => a.price - b.price)
      case 'price-high':
        return productsCopy.sort((a, b) => b.price - a.price)
      case 'newest':
        return productsCopy.sort((a, b) => b.id - a.id)
      case 'featured':
      default:
        return productsCopy
    }
  }

  const sortedProducts = getSortedProducts()

  return (
    <div className='flex-1 p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>Our Products</h2>
          <p className='text-gray-600 mt-1'>
            Showing {Prodects?.length || 0} {Prodects?.length === 1 ? 'product' : 'products'}
          </p>
        </div>
        
        <select 
          value={sortOption}
          onChange={handleSortChange}
          className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
        >
          <option value='featured'>Sort by: Featured</option>
          <option value='price-low'>Price: Low to High</option>
          <option value='price-high'>Price: High to Low</option>
          <option value='newest'>Newest First</option>
        </select>
      </div>

      {sortedProducts && sortedProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {sortedProducts.map((product) => (
            <Card 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              img={product.image} 
            />
          ))}
        </div>
      ) : (
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