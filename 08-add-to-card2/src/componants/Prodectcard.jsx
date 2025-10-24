import React from "react";
import "./ProductCard.css";
// import cardditails from './cardditails';

const ProductCard = (item) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {item.seller == true ? (
          <div className="seller-badge">Best Seller</div>
        ) : null}
        <img src={item.imgsrc} alt={item.title} className="product-image" />
        <div className="image-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-subtitle">{item.subtitle}</p>
        <p className="product-description">{item.description}</p>
        <div className="product-footer">
          <div className="product-price">{item.price}</div>
          <button className="buy-button">
            Buy Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
