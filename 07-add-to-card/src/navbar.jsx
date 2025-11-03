import './navbar.css';

function Navbar({ navbarlist, cartclick }) {
  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">🍽️</div>
          <div className="logo-text">Patidar no Nasto</div>
        </div>
        <button className="addcard" onClick={cartclick}>
          🛒 Cart {navbarlist}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
