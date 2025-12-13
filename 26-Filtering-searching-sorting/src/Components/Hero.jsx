import { useEffect, useState } from 'react'
import Header from './Header'
import LeftControlar from './LeftControlar'
import Cards from './Cards'
import LocalStorage from './LocalStorage'
import Footer from './Footer'
import { Filter, X } from 'lucide-react'


function Hero() {

  const [SearchValue, setSearchValue] = useState('')
  const [categories, setCategories] = useState([]);
  const [range, setRange] = useState(50000);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const allProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [Prodects, setProdects] = useState(allProducts);

  useEffect(() => {
    let filteredProducts = allProducts;

    if (SearchValue.trim()) {
      const searchLower = SearchValue.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower)
      );
    }

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.some(cat => product.category.toLowerCase() === cat.toLowerCase())
      );
    }

    if (priceRange) {
      filteredProducts = filteredProducts.filter((product) => 
        product.price >= priceRange.min && product.price <= priceRange.max
      );
    } else {
      filteredProducts = filteredProducts.filter((product) => product.price <= range);
    }

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brands.some(brand => product.brand.toLowerCase().includes(brand.toLowerCase()))
      );
    }

    setProdects(filteredProducts);
  }, [SearchValue, categories, range, brands, priceRange]);
  
  
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex flex-col'>
      <LocalStorage />
      <Header SearchValue={SearchValue} setSearchValue={setSearchValue} />
      
      <div className='bg-linear-to-r from-blue-600 to-purple-600 text-white py-12 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 animate-fadeIn'>
            Transform Your Space
          </h1>
          <p className='text-lg md:text-xl text-blue-100 animate-fadeIn'>
            Discover premium furniture that brings comfort and style to your home
          </p>
        </div>
      </div>

      <div className='flex-1'>
        <div className='max-w-[1920px] mx-auto px-4 py-6'>
          <div className='lg:hidden mb-4'>
            <button 
              onClick={() => setShowMobileFilters(true)}
              className='w-full bg-white shadow-md rounded-lg px-4 py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors'>
              <Filter className='w-5 h-5' />
              <span className='font-medium'>Show Filters</span>
            </button>
          </div>

          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='hidden lg:block'>
              <LeftControlar 
                categories={categories} 
                setCategories={setCategories} 
                range={range} 
                setRange={setRange} 
                brands={brands} 
                setBrands={setBrands}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            {showMobileFilters && (
              <div className='fixed inset-0 bg-black/50 z-50 lg:hidden animate-fadeIn'>
                <div className='absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto animate-slideInRight'>
                  <div className='sticky top-0 bg-white border-b p-4 flex items-center justify-between'>
                    <h2 className='text-xl font-bold'>Filters</h2>
                    <button 
                      onClick={() => setShowMobileFilters(false)}
                      className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                      <X className='w-6 h-6' />
                    </button>
                  </div>
                  <div className='p-4'>
                    <LeftControlar 
                      categories={categories} 
                      setCategories={setCategories} 
                      range={range} 
                      setRange={setRange} 
                      brands={brands} 
                      setBrands={setBrands}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                    />
                  </div>
                </div>
              </div>
            )}

            <Cards Prodects={Prodects} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hero