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
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    description: "Beautiful pink party gown for weddings, parties and special occasions.",
  },
  {
    id: 5,
    name: "Black Hoodie",
    brand: "NEXORA",
    category: "Men",
    price: 1499,
    oldPrice: 2199,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    description: "Comfortable black hoodie with premium warm fabric.",
  },
  {
    id: 6,
    name: "Casual Women Top",
    brand: "STYLEX",
    category: "Women",
    price: 999,
    oldPrice: 1599,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    description: "Trendy casual women top for everyday wear.",
  },
  {
    id: 7,
    name: "Summer Collection Outfit",
    brand: "NEXORA",
    category: "Women",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
    description: "Stylish summer outfit with fresh and elegant look.",
  },
  {
    id: 8,
    name: "Winter Streetwear Jacket",
    brand: "URBAN",
    category: "Men",
    price: 2399,
    oldPrice: 3299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    description: "Premium winter streetwear jacket for modern fashion.",
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
        <div style={styles.imageBox}>
          <img src={product.image} alt={product.name} style={styles.image} />

          {/* <button
            style={styles.heartIcon}
            onClick={() => dispatch(addToWishlist(product))}
          >
            <FaHeart />
          </button> */}

          <button
  type="button"
  style={styles.heartIcon}
  onClick={() => {
    dispatch(addToWishlist(product));
    navigate("/wishlist");
  }}
>
  <FaHeart />
</button>
        </div>

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

  imageBox: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    borderRadius: "18px",
  },

  // heartIcon: {
  //   position: "absolute",
  //   top: "18px",
  //   right: "18px",
  //   width: "48px",
  //   height: "48px",
  //   borderRadius: "50%",
  //   border: "none",
  //   background: "#fff",
  //   color: "#ff3f6c",
  //   fontSize: "20px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   cursor: "pointer",
  //   boxShadow: "0 5px 15px rgba(0,0,0,.15)",
  // },

  heartIcon: {
  position: "absolute",
  top: "18px",
  right: "18px",
  zIndex: 999,
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "none",
  background: "#fff",
  color: "#ff3f6c",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,.15)",
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
    display: "flex",
    alignItems: "center",
    gap: "8px",
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
    fontSize: "16px",
  },

  backBtn: {
    padding: "15px",
    background: "#222",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProductDetail;