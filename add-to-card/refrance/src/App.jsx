import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer'
import CartPage from './Components/CartPage'
function App() {
      const [cart,setcart]=useState([])
       const [showCart, setShowCart] = useState(false)

    function addToCart(product){
      setcart([...cart,product])
    }

    function handleToggleCart() {
    setShowCart(!showCart)
  }

  return (
    <>
    <Navbar cartValue={cart.length} cartClick={handleToggleCart}/>
    {
      showCart == true ? <CartPage cartItems={cart} /> :<ProductList cartCounter={addToCart}/> 
    }
    
    <Footer/>
    </>
  )
}

export default App
