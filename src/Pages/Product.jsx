import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "NEXORA",
    category: "Men",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    brand: "NEXORA",
    category: "Women",
    price: 1299,
    oldPrice: 1999,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
  },
  {
    id: 3,
    name: "Denim Jacket",
    brand: "URBAN",
    category: "Men",
    price: 1799,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
  },
  {
    id: 4,
    name: "Pink Party Gown",
    brand: "STYLEX",
    category: "Women",
    price: 2199,
    oldPrice: 2999,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
  },
  {
    id: 5,
    name: "Black Hoodie",
    brand: "NEXORA",
    category: "Men",
    price: 1499,
    oldPrice: 2199,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
  },
  {
    id: 6,
    name: "Casual Women Top",
    brand: "STYLEX",
    category: "Women",
    price: 999,
    oldPrice: 1599,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
  {
    id: 7,
    name: "Summer Collection Outfit",
    brand: "NEXORA",
    category: "Women",
    price: 1899,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
  },
  {
    id: 8,
    name: "Winter Streetwear Jacket",
    brand: "URBAN",
    category: "women",
    price: 2399,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
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
    <div className="products-page">
      <section className="products-hero">
        <h1>Shop Collection</h1>
        <p>
          {searchText
            ? `Search result for "${searchText}"`
            : "Upgrade your wardrobe with premium fashion styles"}
        </p>
      </section>

      <div className="products-wrapper">
        <aside className="products-sidebar">
          <h3>Filters</h3>

          <div className="filter-group">
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

          <div className="filter-group">
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

          <button className="clear-btn" onClick={clearFilters}>
            Clear Filter
          </button>
        </aside>

        <main className="products-main">
          <div className="products-topbar">
            <p>Showing {filteredProducts.length} products</p>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Sort by</option>
              <option value="low">Price Low to High</option>
              <option value="high">Price High to Low</option>
              <option value="new">Newest First</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <h2 className="no-data">No products found</h2>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((item) => (
                <div key={item.id} className="product-card-box">
                  <div className="product-img-box">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>

                    <button
                      className="heart-btn"
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      <FaHeart />
                    </button>

                    <span className="new-badge">New</span>
                  </div>

                  <div className="product-content">
                    <span className="product-brand">{item.brand}</span>

                    <Link to={`/product/${item.id}`} className="product-link">
                      <h3>{item.name}</h3>
                    </Link>

                    <p className="product-category">{item.category}</p>

                    <div className="price-row">
                      <span className="price">₹{item.price}</span>
                      <span className="old-price">₹{item.oldPrice}</span>
                    </div>

                    <button
                      className="cart-btn"
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

export default Products;