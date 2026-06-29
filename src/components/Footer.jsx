import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.logo}>NEXORA</h2>
          <p style={styles.text}>
            Discover the latest fashion trends for men and women.
            Premium quality clothing at affordable prices.
          </p>
        </div>

        <div>
          <h3 style={styles.heading}>Quick Links</h3>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Shop</Link>
          <Link to="/men" style={styles.link}>Men</Link>
          <Link to="/women" style={styles.link}>Women</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

        <div>
          <h3 style={styles.heading}>Customer Care</h3>
          <Link to="/help-center" style={styles.link}>Help Center</Link>
          <Link to="/shipping" style={styles.link}>Shipping</Link>
          <Link to="/returns" style={styles.link}>Returns</Link>
          <Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link>
         <Link to="/terms-conditions" style={styles.link}>
  Terms & Conditions
</Link>
        </div>

        <div>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.item}>📍 Surat, Gujarat</p>
          <p style={styles.item}>📞 +91 9876543210</p>
          <p style={styles.item}>✉ support@nexora.com</p>

          <div style={styles.social}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      <hr style={styles.hr} />

      <p style={styles.copy}>© 2026 NEXORA. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    padding: "60px 80px 25px",
    // marginTop: "80px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "40px",
  },
  logo: {
    color: "#ff3f6c",
    marginBottom: "15px",
  },
  text: {
    color: "#bbb",
    lineHeight: "28px",
  },
  heading: {
    marginBottom: "18px",
  },
  link: {
    display: "block",
    color: "#bbb",
    textDecoration: "none",
    marginBottom: "10px",
  },
  item: {
    color: "#bbb",
    marginBottom: "10px",
  },
  social: {
    display: "flex",
    gap: "18px",
    fontSize: "22px",
    color: "#ff3f6c",
    marginTop: "20px",
    cursor: "pointer",
  },
  hr: {
    margin: "40px 0 20px",
    border: "1px solid #333",
  },
  copy: {
    textAlign: "center",
    color: "#888",
  },
};

export default Footer;