import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>

        <h1 style={styles.title}>Thank You!</h1>

        <p style={styles.text}>
          Your order has been placed successfully.
        </p>

        <p style={styles.subText}>
          Payment Method: <strong>Cash on Delivery</strong>
        </p>

        <button
          style={styles.button}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

        <button
          style={styles.button2}
          onClick={() => navigate("/profile")}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f6f6f6",
    padding: "20px",
  },

  card: {
    width: "500px",
    background: "#fff",
    borderRadius: "20px",
    padding: "50px 40px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,.12)",
  },

  icon: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#22c55e",
    color: "#fff",
    margin: "0 auto 25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "55px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "38px",
    marginBottom: "15px",
    color: "#222",
  },

  text: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "10px",
  },

  subText: {
    fontSize: "17px",
    color: "#444",
    marginBottom: "35px",
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: "#ff3f6c",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "15px",
  },

  button2: {
    width: "100%",
    padding: "15px",
    border: "2px solid #ff3f6c",
    borderRadius: "10px",
    background: "#fff",
    color: "#ff3f6c",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default ThankYou;