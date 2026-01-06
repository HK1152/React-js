import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import Login from './Components/login';
import Singin from './Components/singin';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singin />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <div className="container">
                <ProductForm />
              </div>
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/products" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
