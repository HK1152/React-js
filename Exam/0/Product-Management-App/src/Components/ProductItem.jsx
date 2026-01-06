import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from './product/productthunk.js';

function ProductItem({ product }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(product.title || product.name || '');
  const [price, setPrice] = useState(product.price || 0);
  const [image, setImage] = useState(product.image || '');
  const [category, setCategory] = useState(product.category || '');
  const [description, setDescription] = useState(product.description || '');
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };

  const handleUpdate = () => {
    dispatch(updateProduct({ 
      id: product.id, 
      title,
      name: title,
      price: parseFloat(price), 
      image,
      category,
      description 
    }));
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <div className="edit-form">
          <h4 style={{ marginBottom: '1rem' }}>Edit Product</h4>
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />
          </div>
          <div className="form-group">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="2"
            />
          </div>
          <div className="product-actions">
            <button onClick={handleUpdate} className="btn-save">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          {product.image && (
            <img
              src={product.image}
              alt={product.title || product.name}
              className="product-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
              }}
            />
          )}

          <div className="product-content">
            {product.category && (
              <span className="product-category">{product.category}</span>
            )}
            
            <h3 className="product-title">{product.title || product.name}</h3>
            
            <p className="product-price">${product.price?.toFixed(2)}</p>
            
            {product.description && (
              <p className="product-description">{product.description}</p>
            )}

            <div className="product-actions">
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                Edit
              </button>
              <button onClick={handleDelete} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductItem;
