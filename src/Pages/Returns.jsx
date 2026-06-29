import React from "react";

function Returns() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Returns & Refund Policy</h1>
        <p style={styles.subtitle}>
          Easy returns and hassle-free refunds for a better shopping experience.
        </p>
      </section>

      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Return Policy</h2>

          <p>
            At <strong>NEXORA</strong>, customer satisfaction is our priority.
            If you are not completely satisfied with your purchase, you can
            request a return within <strong>7 days</strong> of delivery.
          </p>

          <div style={styles.box}>
            <h3>✅ Return Conditions</h3>
            <ul>
              <li>Item must be unused and in original condition.</li>
              <li>Original tags and packaging must be intact.</li>
              <li>Invoice or order confirmation is required.</li>
              <li>Products damaged by the customer are not eligible.</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h3>💰 Refund Policy</h3>
            <ul>
              <li>Refunds are processed within 5–7 business days.</li>
              <li>Amount is credited to the original payment method.</li>
              <li>Cash on Delivery refunds are transferred to your bank account.</li>
            </ul>
          </div>

          <div style={styles.box}>
            <h3>📦 Exchange Policy</h3>
            <ul>
              <li>Exchange is available for size or damaged products.</li>
              <li>Exchange request must be placed within 7 days.</li>
            </ul>
          </div>

          <div style={styles.note}>
            <strong>Need Help?</strong><br />
            📧 support@nexora.com <br />
            📞 +91 9876543210
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f8fc",
  },

  hero: {
    background: "linear-gradient(135deg,#ff3f6c,#ff8fab)",
    color: "#fff",
    textAlign: "center",
    padding: "80px 20px",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
  },

  container: {
    maxWidth: "1000px",
    margin: "50px auto",
    padding: "0 20px",
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
  },

  box: {
    background: "#fff5f7",
    borderLeft: "5px solid #ff3f6c",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "25px",
  },

  note: {
    marginTop: "30px",
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "10px",
    lineHeight: "28px",
  },
};

export default Returns;