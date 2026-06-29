// function Success() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Payment Successful 🎉</h1>
//       <h2>Your Order has been placed.</h2>
//     </div>
//   );
// }

// export default Success;

import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>✔</div>

        <h1 style={styles.title}>Payment Successful!</h1>

        <p style={styles.text}>
          Thank you for shopping with <strong>NEXORA</strong>.
        </p>

        <p style={styles.text}>
          Your order has been placed successfully.
        </p>

        <div style={styles.infoBox}>
          <p><strong>Order Status:</strong> Confirmed</p>
          <p><strong>Payment:</strong> Successful</p>
          <p><strong>Delivery:</strong> 3-5 Business Days</p>
        </div>

        <div style={styles.buttonGroup}>
          <Link to="/products" style={styles.shopBtn}>
            Continue Shopping
          </Link>

          <Link to="/" style={styles.homeBtn}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#f8f9fb,#eef2ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  card: {
    width: "100%",
    maxWidth: "650px",
    background: "#fff",
    borderRadius: "20px",
    padding: "50px",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,.12)",
  },

  icon: {
    width: "100px",
    height: "100px",
    margin: "0 auto 25px",
    borderRadius: "50%",
    background: "#22c55e",
    color: "#fff",
    fontSize: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  title: {
    fontSize: "38px",
    color: "#22c55e",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "10px",
  },

  infoBox: {
    marginTop: "30px",
    background: "#f8f9fb",
    padding: "20px",
    borderRadius: "12px",
    lineHeight: "32px",
    color: "#333",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "35px",
    flexWrap: "wrap",
  },

  shopBtn: {
    textDecoration: "none",
    background: "#ff3f6c",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "700",
  },

  homeBtn: {
    textDecoration: "none",
    background: "#222",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "10px",
    fontWeight: "700",
  },
};

export default Success;