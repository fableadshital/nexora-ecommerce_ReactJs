// import React from "react";
// import { Link } from "react-router-dom";


// const products = [
//   {
//     id: 1,
//     name: "Classic White T-Shirt",
//     price: 799,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
//   },
//   {
//     id: 2,
//     name: "Floral Summer Dress",
//     price: 1299,
//     image:
//       "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
//   },
//   {
//     id: 3,
//     name: "Denim Jacket",
//     price: 1799,
//     image:
//       "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
//   },
// ];

// function Home() {
//   return (
//     <div style={styles.page}>
//       <section style={styles.hero}>
//         <div style={styles.heroContent}>
//           <span style={styles.tag}>NEW SEASON 2026</span>

//           <h1 style={styles.title}>
//             Discover Your <br /> Perfect Style
//           </h1>

//           <p style={styles.text}>
//             Explore trendy fashion collections for men and women with premium
//             quality and modern designs.
//           </p>

//           <div style={styles.buttons}>
//             <Link to="/products" style={styles.primaryBtn}>
//               Shop Now
//             </Link>

//             <Link to="/women" style={styles.secondaryBtn}>
//               Explore Women
//             </Link>
//           </div>
//         </div>

//         <div style={styles.heroImageBox}>
//           <img
//             src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
//             alt="Fashion"
//             style={styles.heroImage}
//           />
//         </div>
//       </section>

//       <section style={styles.categorySection}>
//         <h2 style={styles.sectionTitle}>Shop by Category</h2>

//         <div style={styles.categories}>
//           <Link to="/men" style={styles.categoryCard}>
//             <img
//               src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600"
//               alt="Men"
//               style={styles.categoryImg}
//             />
//             <h3>Men Collection</h3>
//           </Link>

//           <Link to="/women" style={styles.categoryCard}>
//             <img
//               src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600"
//               alt="Women"
//               style={styles.categoryImg}
//             />
//             <h3>Women Collection</h3>
//           </Link>

//           <Link to="/products" style={styles.categoryCard}>
//             <img
//               src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600"
//               alt="Shop"
//               style={styles.categoryImg}
//             />
//             <h3>Latest Fashion</h3>
//           </Link>
//         </div>
//       </section>

//       <section style={styles.productSection}>
//         <h2 style={styles.sectionTitle}>Featured Products</h2>

//         <div style={styles.productGrid}>
//           {products.map((product) => (
//             <Link
//               key={product.id}
//               to={`/product/${product.id}`}
//               style={styles.productCard}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 style={styles.productImage}
//               />

//               <div style={styles.productInfo}>
//                 <h3 style={styles.productName}>{product.name}</h3>
//                 <p style={styles.productPrice}>₹{product.price}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <section style={styles.trendingSection} className="trending-section">
//   <h2 style={styles.sectionTitle} className="trending-title">Trending Collection</h2>

//   <div style={styles.trendingGrid}>
//     <div style={styles.trendingCard} className="">
//       <img
//         src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800"
//         alt="Summer Collection"
//         style={styles.trendingImage}
//       />
//       <div style={styles.trendingContent}>
//         <h3>Summer Collection</h3>
//         <p>Lightweight outfits for everyday comfort.</p>
//         <Link to="/products" style={styles.shopBtn}>
//           Shop Now
//         </Link>
//       </div>
//     </div>

//     <div style={styles.trendingCard}>
//       <img
//         src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
//         alt="Winter Collection"
//         style={styles.trendingImage}
//       />
//       <div style={styles.trendingContent}>
//         <h3>Winter Collection</h3>
//         <p>Stay warm with our premium jackets & hoodies.</p>
//         <Link to="/products" style={styles.shopBtn}>
//           Shop Now
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>

//       <section style={styles.offer}>
//         <h2>Flat 40% OFF</h2>
//         <p>On selected fashion products. Limited time offer.</p>
//         <Link to="/products" style={styles.offerBtn}>
//           Grab Offer
//         </Link>
//       </section>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     background: "#f8f8f8",
//   },

//   hero: {
//     minHeight: "85vh",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     alignItems: "center",
//     gap: "40px",
//     padding: "60px 70px",
//     background: "linear-gradient(120deg, #fff 0%, #fff1f5 100%)",
//   },

//   heroContent: {
//     maxWidth: "560px",
//   },

//   tag: {
//     color: "#ff3f6c",
//     fontWeight: "700",
//     letterSpacing: "2px",
//     fontSize: "14px",
//   },

//   title: {
//     fontSize: "64px",
//     lineHeight: "1.1",
//     margin: "18px 0",
//     color: "#222",
//   },

//   text: {
//     fontSize: "18px",
//     color: "#666",
//     lineHeight: "1.7",
//   },

//   buttons: {
//     display: "flex",
//     gap: "18px",
//     marginTop: "30px",
//   },

//   primaryBtn: {
//     padding: "14px 32px",
//     background: "#ff3f6c",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "30px",
//     fontWeight: "700",
//   },

//   secondaryBtn: {
//     padding: "14px 32px",
//     background: "#222",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "30px",
//     fontWeight: "700",
//   },

//   heroImageBox: {
//     borderRadius: "30px",
//     overflow: "hidden",
//     boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
//   },

//   heroImage: {
//     width: "100%",
//     height: "560px",
//     objectFit: "cover",
//     display: "block",
//   },

//   categorySection: {
//     padding: "70px",
//     background: "#fff",
//   },

//   sectionTitle: {
//     textAlign: "center",
//     fontSize: "38px",
//     marginBottom: "40px",
//     color: "#222",
//   },

//   categories: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//     gap: "30px",
//   },

//   categoryCard: {
//     background: "#fff",
//     textDecoration: "none",
//     color: "#222",
//     borderRadius: "18px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//     textAlign: "center",
//     fontWeight: "700",
//     fontSize: "20px",
//   },

//   categoryImg: {
//     width: "100%",
//     height: "330px",
//     objectFit: "cover",
//   },

//   productSection: {
//     padding: "70px",
//     background: "#f8f8f8",
//   },

//   productGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
//     gap: "25px",
//   },

//   productCard: {
//     background: "#fff",
//     textDecoration: "none",
//     color: "#222",
//     borderRadius: "15px",
//     overflow: "hidden",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
//   },

//   productImage: {
//     width: "100%",
//     height: "320px",
//     objectFit: "cover",
//     display: "block",
//   },

//   productInfo: {
//     padding: "18px",
//     textAlign: "center",
//   },

//   productName: {
//     margin: "0 0 10px",
//     fontSize: "20px",
//   },

//   productPrice: {
//     color: "#ff3f6c",
//     fontWeight: "bold",
//     fontSize: "22px",
//     margin: 0,
//   },

//   offer: {
//     margin: "60px 70px",
//     padding: "60px",
//     borderRadius: "25px",
//     textAlign: "center",
//     background: "linear-gradient(120deg, #ff3f6c, #ff8fab)",
//     color: "#fff",
//   },

//   offerBtn: {
//     display: "inline-block",
//     marginTop: "15px",
//     padding: "13px 34px",
//     background: "#fff",
//     color: "#ff3f6c",
//     textDecoration: "none",
//     borderRadius: "30px",
//     fontWeight: "700",
//   },
//   trendingSection: {
//   padding: "70px",
//   background: "#fff",
// },

// trendingGrid: {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
//   gap: "30px",
// },

// trendingCard: {
//   borderRadius: "20px",
//   overflow: "hidden",
//   background: "#f8f8f8",
//   boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
// },

// trendingImage: {
//   width: "100%",
//   height: "350px",
//   objectFit: "cover",
// },

// trendingContent: {
//   padding: "25px",
//   textAlign: "center",
// },

// shopBtn: {
//   display: "inline-block",
//   marginTop: "15px",
//   padding: "12px 28px",
//   background: "#ff3f6c",
//   color: "#fff",
//   textDecoration: "none",
//   borderRadius: "30px",
//   fontWeight: "700",
// },

// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1799,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">NEW SEASON 2026</span>

          <h1>
            Discover Your <br /> Perfect Style
          </h1>

          <p>
            Explore trendy fashion collections for men and women with premium
            quality and modern designs.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn">Shop Now</Link>
            <Link to="/women" className="secondary-btn">Explore Women</Link>
          </div>
        </div>

        <div className="hero-image-box">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
            alt="Fashion"
          />
        </div>
      </section>

      <section className="section white">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <Link to="/men" className="category-card">
            <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600" alt="Men" />
            <h3>Men Collection</h3>
          </Link>

          <Link to="/women" className="category-card">
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600" alt="Women" />
            <h3>Women Collection</h3>
          </Link>

          <Link to="/products" className="category-card">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600" alt="Shop" />
            <h3>Latest Fashion</h3>
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card">
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="section white">
        <h2>Trending Collection</h2>

        <div className="trending-grid">
          <div className="trending-card">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800" alt="Summer Collection" />
            <div>
              <h3>Summer Collection</h3>
              <p>Lightweight outfits for everyday comfort.</p>
              <Link to="/products" className="shop-btn">Shop Now</Link>
            </div>
          </div>

          <div className="trending-card">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" alt="Winter Collection" />
            <div>
              <h3>Winter Collection</h3>
              <p>Stay warm with our premium jackets & hoodies.</p>
              <Link to="/products" className="shop-btn">Shop Now</Link>
            </div>
          </div>

        </div>

      </section> */}

      <section className="section white">
  <h2>Trending Collection</h2>

  <div className="trending-grid">

    {/* Card 1 */}
    <div className="trending-card">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800"
        alt="Summer Collection"
      />
      <div className="trending-content">
        <h3>Summer Collection</h3>
        <p>Lightweight outfits for everyday comfort.</p>
        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </div>
    </div>

    {/* Card 2 */}
    <div className="trending-card">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
        alt="Winter Collection"
      />
      <div className="trending-content">
        <h3>Winter Collection</h3>
        <p>Stay warm with our premium jackets & hoodies.</p>
        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </div>
    </div>

    {/* Card 3 */}
    <div className="trending-card">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
        alt="New Arrival"
      />
      <div className="trending-content">
        <h3>New Arrivals</h3>
        <p>Discover the latest fashion trends for every season.</p>
        <Link to="/products" className="shop-btn">
          Shop Now
        </Link>
      </div>
    </div>

  </div>
</section>

      <section className="offer">
        <h2>Flat 40% OFF</h2>
        <p>On selected fashion products. Limited time offer.</p>
        <Link to="/products">Grab Offer</Link>
      </section>
    </div>
  );
}

export default Home;