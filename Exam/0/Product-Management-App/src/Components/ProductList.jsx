import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './product/productthunk.js';
import ProductItem from './ProductItem';
import Footer from './Footer';

function ProductList() {
  const dispatch = useDispatch();
  const { list: products, loading, error } = useSelector((state) => state.products);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];

  let filteredProducts = [...products];

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(product =>
      (product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.title?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  if (filterCategory) {
    filteredProducts = filteredProducts.filter(product =>
      product.category === filterCategory
    );
  }

  if (sortOrder === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container">
        <h2 className="page-title">Product Management</h2>
        <div className="error-message">
          <h3>Firebase Permission Error</h3>
          <p><strong>Error:</strong> {error}</p>
          <p>Please configure Firebase Firestore rules to allow read/write access.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="page-title">Product Management</h2>
      
      <div className="controls-box">
        <div className="controls-grid">
          <div className="form-group">
            <label>Search by Title</label>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Sort by Price</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">No Sorting</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <div className="form-group">
            <label>Filter by Category</label>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="products-header">
          <h3>Products ({filteredProducts.length})</h3>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
