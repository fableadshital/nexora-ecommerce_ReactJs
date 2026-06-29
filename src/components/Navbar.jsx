// // import { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import {
// //   FaHeart,
// //   FaShoppingCart,
// //   FaUserCircle,
// //   FaSearch,
// // } from "react-icons/fa";

// // function Navbar() {
// //   const [search, setSearch] = useState("");
// //   const [wishlistCount, setWishlistCount] = useState(0);
// //   const navigate = useNavigate();

// //   const handleSearch = (e) => {
// //     if (e.key === "Enter" && search.trim() !== "") {
// //       navigate(`/products?search=${search}`);
// //       setSearch("");
// //     }
// //   };

// //   useEffect(() => {
// //     const updateWishlist = () => {
// //       const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// //       setWishlistCount(wishlist.length);
// //     };

// //     updateWishlist();

// //     window.addEventListener("wishlistUpdated", updateWishlist);

// //     return () => {
// //       window.removeEventListener("wishlistUpdated", updateWishlist);
// //     };
// //   }, []);

// //   return (
// //     <nav style={styles.navbar}>
// //       <div style={styles.logo}>
// //         <Link to="/" style={styles.logoText}>
// //           NEXORA
// //         </Link>
// //       </div>

// //       <ul style={styles.menu}>
// //         <li><Link to="/" style={styles.link}>Home</Link></li>
// //         <li><Link to="/products" style={styles.link}>Shop</Link></li>
// //         <li><Link to="/men" style={styles.link}>Men</Link></li>
// //         <li><Link to="/women" style={styles.link}>Women</Link></li>
// //         <li><Link to="/contact" style={styles.link}>Contact</Link></li>
// //       </ul>

// //       <div style={styles.searchBox}>
// //         <FaSearch color="#888" />
// //         <input
// //           type="text"
// //           placeholder="Search Products..."
// //           style={styles.input}
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           onKeyDown={handleSearch}
// //         />
// //       </div>

// //       <div style={styles.icons}>
// //         <Link to="/wishlist" style={styles.iconBox}>
// //           <FaHeart size={22} />
// //           {wishlistCount > 0 && (
// //             <span style={styles.badge}>{wishlistCount}</span>
// //           )}
// //         </Link>

// //         <Link to="/cart" style={styles.icon}>
// //           <FaShoppingCart size={22} />
// //         </Link>

// //         <Link to="/signin" style={styles.icon}>
// //           <FaUserCircle size={24} />
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // }

// // const styles = {
// //   navbar: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "15px 50px",
// //     background: "#fff",
// //     boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
// //     position: "sticky",
// //     top: 0,
// //     zIndex: 1000,
// //   },
// //   logoText: {
// //     textDecoration: "none",
// //     fontSize: "28px",
// //     fontWeight: "bold",
// //     color: "#ff3f6c",
// //     letterSpacing: "2px",
// //   },
// //   menu: {
// //     display: "flex",
// //     listStyle: "none",
// //     gap: "30px",
// //     margin: 0,
// //     padding: 0,
// //   },
// //   link: {
// //     textDecoration: "none",
// //     color: "#222",
// //     fontSize: "17px",
// //     fontWeight: "600",
// //   },
// //   searchBox: {
// //     display: "flex",
// //     alignItems: "center",
// //     background: "#f5f5f5",
// //     padding: "10px 15px",
// //     borderRadius: "30px",
// //     width: "320px",
// //   },
// //   input: {
// //     border: "none",
// //     outline: "none",
// //     background: "transparent",
// //     marginLeft: "10px",
// //     width: "100%",
// //     fontSize: "15px",
// //   },
// //   icons: {
// //     display: "flex",
// //     gap: "20px",
// //     alignItems: "center",
// //   },
// //   icon: {
// //     color: "#222",
// //     textDecoration: "none",
// //   },
// //   iconBox: {
// //     color: "#222",
// //     textDecoration: "none",
// //     position: "relative",
// //   },
// //   badge: {
// //     position: "absolute",
// //     top: "-8px",
// //     right: "-10px",
// //     width: "18px",
// //     height: "18px",
// //     borderRadius: "50%",
// //     background: "#ff3f6c",
// //     color: "#fff",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     fontSize: "11px",
// //     fontWeight: "bold",
// //   },
// // };

// // export default Navbar;



// import { useState } from "react";
// import "../App.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaUserCircle,
//   FaSearch,
// } from "react-icons/fa";

// function Navbar() {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const wishlistCount = useSelector((state) => state.wishlist.items.length);

//   const cartCount = useSelector((state) =>
//     state.cart.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   const handleSearch = (e) => {
//     if (e.key === "Enter" && search.trim() !== "") {
//       navigate(`/products?search=${search}`);
//       setSearch("");
//     }
//   };

//   return (
//     <nav style={styles.navbar}>
//       <Link to="/" style={styles.logoText}>
//         NEXORA
//       </Link>

//       <ul style={styles.menu}>
//         <li><Link to="/" style={styles.link}>Home</Link></li>
//         <li><Link to="/products" style={styles.link}>Shop</Link></li>
//         <li><Link to="/men" style={styles.link}>Men</Link></li>
//         <li><Link to="/women" style={styles.link}>Women</Link></li>
//         <li><Link to="/contact" style={styles.link}>Contact</Link></li>
//       </ul>

//       <div style={styles.searchBox}>
//         <FaSearch color="#888" />
//         <input
//           type="text"
//           placeholder="Search Products..."
//           style={styles.input}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyDown={handleSearch}
//         />
//       </div>

//       <div style={styles.icons}>
//         <Link to="/wishlist" style={styles.iconBox}>
//           <FaHeart size={22} />
//           {wishlistCount > 0 && (
//             <span style={styles.badge}>{wishlistCount}</span>
//           )}
//         </Link>

//         <Link to="/cart" style={styles.iconBox}>
//           <FaShoppingCart size={22} />
//           {cartCount > 0 && (
//             <span style={styles.badge}>{cartCount}</span>
//           )}
//         </Link>

//         {/* <Link to="/signin" style={styles.icon}>
//           <FaUserCircle size={24} />
//         </Link> */}

//         <Link to="/profile" style={styles.icon}>
//   <FaUserCircle size={24} />
// </Link>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 50px",
//     background: "#fff",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//   },

//   logoText: {
//     textDecoration: "none",
//     fontSize: "28px",
//     fontWeight: "bold",
//     color: "#ff3f6c",
//     letterSpacing: "2px",
//   },

//   menu: {
//     display: "flex",
//     listStyle: "none",
//     gap: "30px",
//     margin: 0,
//     padding: 0,
//   },

//   link: {
//     textDecoration: "none",
//     color: "#222",
//     fontSize: "17px",
//     fontWeight: "600",
//   },

//   searchBox: {
//     display: "flex",
//     alignItems: "center",
//     background: "#f5f5f5",
//     padding: "10px 15px",
//     borderRadius: "30px",
//     width: "320px",
//   },

//   input: {
//     border: "none",
//     outline: "none",
//     background: "transparent",
//     marginLeft: "10px",
//     width: "100%",
//     fontSize: "15px",
//   },

//   icons: {
//     display: "flex",
//     gap: "20px",
//     alignItems: "center",
//   },

//   icon: {
//     color: "#222",
//     textDecoration: "none",
//   },

//   iconBox: {
//     color: "#222",
//     textDecoration: "none",
//     position: "relative",
//   },

//   badge: {
//     position: "absolute",
//     top: "-8px",
//     right: "-10px",
//     width: "18px",
//     height: "18px",
//     borderRadius: "50%",
//     background: "#ff3f6c",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "11px",
//     fontWeight: "bold",
//   },
// };

// export default Navbar;

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