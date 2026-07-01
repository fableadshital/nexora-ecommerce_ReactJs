import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-top">
        <Link to="/" className="logo">
          NEXORA
        </Link>

        <ul className="desktop-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="search-box desktop-search">
          <FaSearch color="#888" />
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="icons">
          <Link to="/wishlist" className="icon-box">
            <FaHeart size={22} />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="icon-box">
            <FaShoppingCart size={22} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>

          <Link to="/profile" className="icon-box">
            <FaUserCircle size={24} />
          </Link>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="search-box mobile-search">
            <FaSearch color="#888" />
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;