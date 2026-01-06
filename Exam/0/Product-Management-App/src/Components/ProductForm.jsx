import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './product/productthunk.js';

function ProductForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && price && category) {
      dispatch(addProduct({ 
        title, 
        name: title,
        price: parseFloat(price), 
        image,
        category,
        description 
      }));
      setTitle('');
      setPrice('');
      setImage('');
      setCategory('');
      setDescription('');
    }
  };

  return (
    <div className="form-box">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Product Title *</label>
            <input
              type="text"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Price *</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              step="0.01"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit" className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
