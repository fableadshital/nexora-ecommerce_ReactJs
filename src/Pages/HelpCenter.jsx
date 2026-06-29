import React from "react";
import {
  FaHeadset,
  FaTruck,
  FaUndo,
  FaCreditCard,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function HelpCenter() {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Help Center</h1>
        <p style={styles.heroText}>
          We're here to help! Find answers to your questions or contact our
          support team anytime.
        </p>
      </section>

      {/* Support Cards */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <FaTruck size={35} color="#ff3f6c" />
            <h3>Track Order</h3>
            <p>Track your shipment and delivery status instantly.</p>
          </div>

          <div style={styles.card}>
            <FaUndo size={35} color="#ff3f6c" />
            <h3>Returns</h3>
            <p>Easy 7-day return and refund process.</p>
          </div>

          <div style={styles.card}>
            <FaCreditCard size={35} color="#ff3f6c" />
            <h3>Payments</h3>
            <p>Secure payment methods and billing support.</p>
          </div>

          <div style={styles.card}>
            <FaHeadset size={35} color="#ff3f6c" />
            <h3>24/7 Support</h3>
            <p>Our customer support team is always available.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        <div style={styles.question}>
          <h4>How can I track my order?</h4>
          <p>
            Go to My Orders and enter your Order ID to check the latest status.
          </p>
        </div>

        <div style={styles.question}>
          <h4>How do I cancel an order?</h4>
          <p>
            Orders can be cancelled before they are shipped from your account.
          </p>
        </div>

        <div style={styles.question}>
          <h4>How do I return a product?</h4>
          <p>
            Request a return within 7 days from your Orders page.
          </p>
        </div>

        <div style={styles.question}>
          <h4>When will I receive my refund?</h4>
          <p>
            Refunds are processed within 5-7 business days after approval.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section style={styles.contact}>
        <h2>Still Need Help?</h2>

        <div style={styles.contactRow}>
          <div style={styles.contactCard}>
            <FaEnvelope color="#ff3f6c" size={28} />
            <h3>Email</h3>
            <p>support@nexora.com</p>
          </div>

          <div style={styles.contactCard}>
            <FaPhoneAlt color="#ff3f6c" size={28} />
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#f8f9fb",
    minHeight: "100vh",
  },

  hero: {
    background: "linear-gradient(135deg,#ff3f6c,#ff7b9c)",
    color: "#fff",
    textAlign: "center",
    padding: "80px 20px",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "15px",
  },

  heroText: {
    maxWidth: "700px",
    margin: "auto",
    fontSize: "18px",
    lineHeight: "30px",
  },

  section: {
    maxWidth: "1200px",
    margin: "60px auto",
    padding: "0 20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
  },

  faq: {
    maxWidth: "900px",
    margin: "60px auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
  },

  question: {
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    paddingBottom: "20px",
  },

  contact: {
    padding: "60px 20px",
    textAlign: "center",
  },

  contactRow: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "35px",
  },

  contactCard: {
    width: "280px",
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
  },
};

export default HelpCenter;