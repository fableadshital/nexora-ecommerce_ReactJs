import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

import { addToCart } from "../features/cartSlice";
import { removeFromWishlist, clearWishlist } from "../features/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div>
            <h1 style={styles.heading}>My Wishlist</h1>
            <p style={styles.count}>{wishlist.length} saved products</p>
          </div>

          {wishlist.length > 0 && (
            <button style={styles.clearBtn} onClick={() => dispatch(clearWishlist())}>
              Clear Wishlist
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div style={styles.emptyBox}>
            <h2>Your wishlist is empty</h2>
            <p>Save your favourite products and buy them later.</p>
            <button style={styles.shopBtn} onClick={() => navigate("/products")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div style={styles.grid}>
            {wishlist.map((item) => (
              <div key={item.id} style={styles.card}>
                <div style={styles.imageBox}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                </div>

                <div style={styles.content}>
                  <p style={styles.brand}>{item.brand || "NEXORA"}</p>
                  <h3 style={styles.name}>{item.name}</h3>
                  <p style={styles.category}>{item.category}</p>

                  <div style={styles.priceRow}>
                    <span style={styles.price}>₹{item.price}</span>
                    {item.oldPrice && (
                      <span style={styles.oldPrice}>₹{item.oldPrice}</span>
                    )}
                  </div>

                  <button
                    style={styles.buyBtn}
                    onClick={() => {
                      dispatch(addToCart(item));
                      navigate("/checkout");
                    }}
                  >
                    <FaShoppingBag /> Buy Now
                  </button>

                  <button
                    style={styles.removeBtn}
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f6",
    padding: "40px 20px",
  },

  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },

  topBar: {
    background: "#fff",
    padding: "24px 28px",
    borderRadius: "14px",
    marginBottom: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  },

  heading: {
    margin: 0,
    fontSize: "32px",
    color: "#222",
  },

  count: {
    margin: "6px 0 0",
    color: "#777",
  },

  clearBtn: {
    padding: "11px 20px",
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
    border: "1px solid #eee",
  },

  imageBox: {
    height: "300px",
    background: "#f1f1f1",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "16px",
  },

  brand: {
    margin: "0 0 6px",
    fontWeight: "800",
    color: "#222",
    fontSize: "14px",
  },

  name: {
    margin: "0 0 8px",
    fontSize: "17px",
    color: "#333",
  },

  category: {
    margin: "0 0 12px",
    color: "#888",
    fontSize: "14px",
  },

  priceRow: {
    marginBottom: "15px",
  },

  price: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#111",
    marginRight: "10px",
  },

  oldPrice: {
    fontSize: "14px",
    color: "#999",
    textDecoration: "line-through",
  },

  buyBtn: {
    width: "100%",
    padding: "12px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "800",
    cursor: "pointer",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },

  removeBtn: {
    width: "100%",
    padding: "11px",
    background: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },

  emptyBox: {
    background: "#fff",
    padding: "60px 20px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  },

  shopBtn: {
    marginTop: "15px",
    padding: "12px 24px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "800",
    cursor: "pointer",
  },
};

export default Wishlist;