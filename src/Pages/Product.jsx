import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "NEXORA",
    category: "Men",
    price: 799,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    brand: "NEXORA",
    category: "Women",
    price: 1299,
    oldPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
  },
  {
    id: 3,
    name: "Denim Jacket",
    brand: "URBAN",
    category: "Men",
    price: 1799,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
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

function Products() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [sortBy, setSortBy] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [priceFilter, setPriceFilter] = React.useState("");

  const searchText = searchParams.get("search") || "";

  const filteredProducts = products
    .filter((item) => {
      const searchMatch =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchText.toLowerCase());

      const categoryMatch =
        categoryFilter === "" || item.category === categoryFilter;

      const priceMatch =
        priceFilter === "" ||
        (priceFilter === "under1000" && item.price < 1000) ||
        (priceFilter === "1000to2000" &&
          item.price >= 1000 &&
          item.price <= 2000) ||
        (priceFilter === "above2000" && item.price > 2000);

      return searchMatch && categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === "low") return a.price - b.price;
      if (sortBy === "high") return b.price - a.price;
      if (sortBy === "new") return b.id - a.id;
      return 0;
    });

  const clearFilters = () => {
    setCategoryFilter("");
    setPriceFilter("");
    setSortBy("");
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Shop Collection</h1>
        <p style={styles.heroText}>
          {searchText
            ? `Search result for "${searchText}"`
            : "Upgrade your wardrobe with premium fashion styles"}
        </p>
      </section>

      <div style={styles.wrapper}>
        <aside style={styles.sidebar}>
          <h3 style={styles.filterTitle}>Filters</h3>

          <div style={styles.filterGroup}>
            <h4>Category</h4>

            <label>
              <input
                type="radio"
                name="category"
                checked={categoryFilter === ""}
                onChange={() => setCategoryFilter("")}
              />{" "}
              All
            </label>

            <label>
              <input
                type="radio"
                name="category"
                checked={categoryFilter === "Men"}
                onChange={() => setCategoryFilter("Men")}
              />{" "}
              Men
            </label>

            <label>
              <input
                type="radio"
                name="category"
                checked={categoryFilter === "Women"}
                onChange={() => setCategoryFilter("Women")}
              />{" "}
              Women
            </label>
          </div>

          <div style={styles.filterGroup}>
            <h4>Price</h4>

            <label>
              <input
                type="radio"
                name="price"
                checked={priceFilter === "under1000"}
                onChange={() => setPriceFilter("under1000")}
              />{" "}
              Under ₹1000
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={priceFilter === "1000to2000"}
                onChange={() => setPriceFilter("1000to2000")}
              />{" "}
              ₹1000 - ₹2000
            </label>

            <label>
              <input
                type="radio"
                name="price"
                checked={priceFilter === "above2000"}
                onChange={() => setPriceFilter("above2000")}
              />{" "}
              Above ₹2000
            </label>
          </div>

          <button style={styles.clearBtn} onClick={clearFilters}>
            Clear Filter
          </button>
        </aside>

        <main style={styles.main}>
          <div style={styles.topBar}>
            {/* <p style={styles.count}>
              Showing {filteredProducts.length} products
            </p> */}

            <select
              style={styles.sort}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="low">Price Low to High</option>
              <option value="high">Price High to Low</option>
              <option value="new">Newest First</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <h2 style={styles.noData}>No products found</h2>
          ) : (
            <div style={styles.grid}>
              {filteredProducts.map((item) => (
                <div key={item.id} style={styles.card}>
                  <div style={styles.imageBox}>
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={styles.image}
                      />
                    </Link>

                    <button
                      style={styles.heart}
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      <FaHeart />
                    </button>

                    <span style={styles.badge}>New</span>
                  </div>

                  <div style={styles.content}>
                    <span style={styles.brand}>{item.brand}</span>

                    <Link
                      to={`/product/${item.id}`}
                      style={{ textDecoration: "none", color: "#222" }}
                    >
                      <h3 style={styles.name}>{item.name}</h3>
                    </Link>

                    <p style={styles.category}>{item.category}</p>

                    <div style={styles.priceRow}>
                      <span style={styles.price}>₹{item.price}</span>
                      <span style={styles.oldPrice}>₹{item.oldPrice}</span>
                    </div>

                    <button
                      style={styles.button}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: { background: "#f6f6f6", minHeight: "100vh" },

  hero: {
    padding: "70px 20px",
    textAlign: "center",
    background: "linear-gradient(120deg, #ff3f6c, #ff8fab)",
    color: "#fff",
  },
  heroTitle: { fontSize: "48px", margin: 0 },
  heroText: { fontSize: "18px", marginTop: "12px" },
  wrapper: { display: "flex", gap: "30px", padding: "40px" },
  sidebar: {
    width: "260px",
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    height: "fit-content",
    boxShadow: "0 5px 18px rgba(0,0,0,0.08)",
  },
  filterTitle: { marginTop: 0, color: "#222" },
  filterGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "22px",
    color: "#444",
  },
  clearBtn: {
    width: "100%",
    marginTop: "25px",
    padding: "12px",
    border: "none",
    background: "#222",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  main: { flex: 1 },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },
  count: { fontWeight: "600", color: "#333" },
  sort: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "28px",
  },
  card: {
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  },
  imageBox: { position: "relative" },
  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    display: "block",
  },
  heart: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "#fff",
    color: "#ff3f6c",
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    background: "#ff3f6c",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
  },
  content: { padding: "18px" },
  brand: { fontWeight: "700", color: "#222" },
  name: { margin: "10px 0 4px", color: "#222" },
  category: { margin: 0, color: "#777" },
  priceRow: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "14px 0",
  },
  price: { color: "#ff3f6c", fontSize: "20px", fontWeight: "800" },
  oldPrice: { color: "#999", textDecoration: "line-through" },
  button: {
    width: "100%",
    padding: "13px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
  noData: { textAlign: "center", marginTop: "80px" },
};


export default Products;