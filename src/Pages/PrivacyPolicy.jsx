import React from "react";

function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Privacy Policy</h1>

        <p>
          At <strong>NEXORA</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>

        <h2>Information We Collect</h2>

        <ul>
          <li>Name, Email Address and Phone Number</li>
          <li>Shipping & Billing Address</li>
          <li>Payment Information</li>
          <li>Order History</li>
        </ul>

        <h2>How We Use Your Information</h2>

        <ul>
          <li>Process and deliver your orders.</li>
          <li>Provide customer support.</li>
          <li>Send order updates and promotional offers.</li>
          <li>Improve our website and shopping experience.</li>
        </ul>

        <h2>Data Security</h2>

        <p>
          We use secure technologies to protect your personal information.
          Your payment details are never stored on our servers.
        </p>

        <h2>Cookies</h2>

        <p>
          Our website uses cookies to improve user experience and website
          performance.
        </p>

        <h2>Contact Us</h2>

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

export default PrivacyPolicy;