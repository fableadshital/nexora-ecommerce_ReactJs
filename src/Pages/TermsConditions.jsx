import React from "react";

function TermsConditions() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Terms & Conditions</h1>

        <p>
          Welcome to <strong>NEXORA</strong>. By accessing or using our
          website, you agree to the following terms and conditions.
        </p>

        <h2>Orders</h2>
        <ul>
          <li>All orders are subject to availability.</li>
          <li>Prices may change without prior notice.</li>
          <li>We reserve the right to cancel suspicious orders.</li>
        </ul>

        <h2>Payments</h2>
        <ul>
          <li>Payments are processed through secure payment gateways.</li>
          <li>Cash on Delivery is available in selected locations.</li>
        </ul>

        <h2>Shipping</h2>
        <ul>
          <li>Orders are dispatched within 24 hours.</li>
          <li>Delivery takes approximately 3–7 business days.</li>
        </ul>

        <h2>Returns & Refunds</h2>
        <ul>
          <li>Returns are accepted within 7 days of delivery.</li>
          <li>Refunds are processed within 5–7 business days.</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          NEXORA is not responsible for delays caused by natural disasters,
          courier issues, or events beyond our control.
        </p>

        <h2>Contact</h2>
        <p>
          Email: support@nexora.com <br />
          Phone: +91 9876543210
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f8f9fb",
    minHeight: "100vh",
    padding: "60px 20px",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
    lineHeight: "32px",
  },
};

export default TermsConditions;