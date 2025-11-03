import React from 'react'

function CartPage({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='cart-page'>
      <h2>Your Cart</h2>
    
      {
      cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img src={item.image} alt={item.title} width="80" />
              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
          <h3>Total Bill: ₹{total}</h3>
        </div>
      )}
    </div>
  )
}

export default CartPage
