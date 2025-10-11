import { useState } from "react";
import "./App.css";
import Navbar from "./navbar.jsx";
import CardSection from "./cardSection.jsx";
import AddCard from "./addCard.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(item) {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <>
      <Navbar navbarlist={cartItems.length} cartclick={toggleCart} />
      <CardSection cartCounter={addToCart} />
      <AddCard 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;
