import "./addcard.css";

function AddCard({ isOpen, onClose, cartItems = [], setCartItems }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity;
  }, 0);

  const updateQuantity = (index, change) => {
    const updatedItems = [...cartItems];
    const currentQty = updatedItems[index].quantity || 1;

    if (currentQty + change > 0) {
      updatedItems[index] = {
          ...updatedItems[index],
          quantity: currentQty + change,
      };
      setCartItems(updatedItems);
    }
  };//done OK

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  return (
    <>
      <div className={`offcanvas ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h2>Cart Items ({cartItems.length})</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items-container">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="item-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <div className="price-details">
                        <p>₹{item.price}</p>
                        <p>× {item.quantity || 1}</p>
                      </div>
                      <p className="subtotal">
                        Total: ₹{item.price * (item.quantity || 1)}
                      </p>
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(index, -1)}
                          >
                            -
                          </button>
                          <span>{item.quantity || 1}</span>
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(index, 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeItem(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <strong>Total Amount: ₹{totalPrice}</strong>
                <button className="checkout-btn">Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`offcanvas-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
}

export default AddCard;
