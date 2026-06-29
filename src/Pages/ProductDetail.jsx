import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaHeart, FaStar } from "react-icons/fa";
import { addToCart } from "../features/cartSlice";
import { addToWishlist } from "../features/wishlistSlice";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "NEXORA",
    category: "Men",
    price: 799,
    oldPrice: 1199,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description: "Premium cotton white t-shirt with soft fabric and comfortable regular fit.",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    brand: "NEXORA",
    category: "Women",
    price: 1299,
    oldPrice: 1999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    description: "Stylish floral summer dress perfect for casual and party wear.",
  },
  {
    id: 3,
    name: "Denim Jacket",
    brand: "URBAN",
    category: "Men",
    price: 1799,
    oldPrice: 2499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
    description: "Modern denim jacket with streetwear inspired premium look.",
  },
  {
    id: 4,
    name: "Pink Party Gown",
    brand: "STYLEX",
    category: "Women",
    price: 2199,
    oldPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
  },
  {
    id: 5,
    name: "Black Hoodie",
    brand: "NEXORA",
    category: "Men",
    price: 1499,
    oldPrice: 2199,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
  },
  {
    id: 6,
    name: "Casual Women Top",
    brand: "STYLEX",
    category: "Women",
    price: 999,
    oldPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
  {
    id: 7,
    name: "Summer Collection Outfit",
    brand: "NEXORA",
    category: "Women",
    price: 1899,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
  },
  {
    id: 8,
    name: "Winter Streetwear Jacket",
    brand: "URBAN",
    category: "Men",
    price: 2399,
    oldPrice: 3299,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  },
];


function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "50px" }}>Product not found</h2>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />

        <div style={styles.info}>
          <span style={styles.brand}>{product.brand}</span>
          <h1 style={styles.title}>{product.name}</h1>

          <p style={styles.rating}>
            <FaStar /> {product.rating}
          </p>

          <p style={styles.desc}>{product.description}</p>

          <div>
            <span style={styles.price}>₹{product.price}</span>
            <span style={styles.oldPrice}>₹{product.oldPrice}</span>
          </div>

          <button
            style={styles.cartBtn}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <button
            style={styles.wishlistBtn}
            onClick={() => dispatch(addToWishlist(product))}
          >
            <FaHeart /> Add to Wishlist
          </button>

          <button style={styles.backBtn} onClick={() => navigate("/products")}>
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f6f6f6",
    padding: "60px",
  },
  card: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "35px",
    boxShadow: "0 10px 25px rgba(0,0,0,.1)",
  },
  image: {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    borderRadius: "18px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  brand: {
    color: "#ff3f6c",
    fontWeight: "800",
  },
  title: {
    fontSize: "42px",
    margin: 0,
  },
  rating: {
    color: "#f59e0b",
    fontWeight: "700",
  },
  desc: {
    color: "#555",
    lineHeight: "1.7",
  },
  price: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#ff3f6c",
    marginRight: "12px",
  },
  oldPrice: {
    color: "#999",
    textDecoration: "line-through",
    fontSize: "20px",
  },
  cartBtn: {
    padding: "15px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
  wishlistBtn: {
    padding: "15px",
    background: "#fff",
    color: "#ff3f6c",
    border: "2px solid #ff3f6c",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
  backBtn: {
    padding: "13px",
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default ProductDetail;