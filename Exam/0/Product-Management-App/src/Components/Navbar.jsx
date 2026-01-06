import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Product Manager
      </Link>
      <div className="navbar-links">
        {currentUser ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/add-product">Add Product</Link>
            <span>{currentUser.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
