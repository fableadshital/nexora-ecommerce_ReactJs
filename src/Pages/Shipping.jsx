import React from "react";

function Shipping() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>NEXORA DELIVERY</span>
          <h1 style={styles.title}>Shipping Policy</h1>
          <p style={styles.subtitle}>
            Fast, safe and reliable delivery for every NEXORA order.
          </p>
        </div>
      </section>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Delivery Details</h2>
          <p style={styles.text}>
            Orders are processed within 24 hours after successful payment.
          </p>

          <div style={styles.grid}>
            <div style={styles.infoBox}>
              <div style={styles.icon}>🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders above ₹999.</p>
            </div>

            <div style={styles.infoBox}>
              <div style={styles.icon}>⏱️</div>
              <h3>Standard Delivery</h3>
              <p>Delivery usually takes 3-7 business days.</p>
            </div>

            <div style={styles.infoBox}>
              <div style={styles.icon}>⚡</div>
              <h3>Express Delivery</h3>
              <p>Express delivery available in selected cities.</p>
            </div>

            <div style={styles.infoBox}>
              <div style={styles.icon}>📦</div>
              <h3>Order Tracking</h3>
              <p>Tracking details will be shared by email or SMS.</p>
            </div>
          </div>

          <div style={styles.note}>
            <strong>Note:</strong> Delivery time may vary during festivals,
            sales, or unexpected weather conditions.
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f8f9fb",
    minHeight: "100vh",
  },
  hero: {
    padding: "90px 20px",
    textAlign: "center",
    background:
      "linear-gradient(135deg, rgba(255,63,108,1), rgba(255,143,171,1))",
    color: "#fff",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "30px",
    background: "rgba(255,255,255,.18)",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "18px",
  },
  title: {
    fontSize: "52px",
    margin: "0 0 15px",
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "600px",
    margin: "0 auto",
  },
  container: {
    maxWidth: "1100px",
    margin: "-45px auto 70px",
    padding: "0 25px",
  },
  card: {
    background: "#fff",
    padding: "45px",
    borderRadius: "22px",
    boxShadow: "0 15px 40px rgba(0,0,0,.1)",
  },
  heading: {
    fontSize: "32px",
    margin: "0 0 10px",
    color: "#222",
  },
  text: {
    color: "#666",
    fontSize: "17px",
    marginBottom: "35px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "25px",
  },
  infoBox: {
    background: "#fff7fa",
    padding: "25px",
    borderRadius: "18px",
    border: "1px solid #ffe0e9",
  },
  icon: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    background: "#ff3f6c",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    marginBottom: "15px",
  },
  note: {
    marginTop: "35px",
    padding: "18px 22px",
    background: "#f3f4f6",
    borderRadius: "14px",
    color: "#444",
    lineHeight: "1.7",
  },
};

export default Shipping;