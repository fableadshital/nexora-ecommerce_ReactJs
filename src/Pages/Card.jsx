import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Card() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.oldPrice * item.quantity,
    0
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = totalMRP - total;
  const delivery = total > 0 ? 0 : 0;
  const finalAmount = total + delivery;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Shopping Bag</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyBox}>
          <h2>Your bag is empty</h2>
          <p>Add items that you like to your bag.</p>
          <Link to="/products" style={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <div style={styles.offerBox}>
              <strong>Available Offers</strong>
              <p>10% instant discount on selected products.</p>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} style={styles.card}>
                <img src={item.image} alt={item.name} style={styles.image} />

                <div style={styles.info}>
                  <h3 style={styles.name}>{item.name}</h3>
                  <p style={styles.category}>{item.category}</p>

                  <div style={styles.priceRow}>
                    <span style={styles.price}>₹{item.price}</span>
                    <span style={styles.oldPrice}>₹{item.oldPrice}</span>
                    <span style={styles.discount}>OFF</span>
                  </div>

                  <p style={styles.qty}>Qty: {item.quantity}</p>

                  <p style={styles.delivery}>Delivery by 3-5 days</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3 style={styles.summaryTitle}>PRICE DETAILS</h3>

            <div style={styles.row}>
              <span>Total MRP</span>
              <span>₹{totalMRP}</span>
            </div>

            <div style={styles.row}>
              <span>Discount on MRP</span>
              <span style={styles.green}>- ₹{discount}</span>
            </div>

            <div style={styles.row}>
              <span>Delivery Fee</span>
              <span style={styles.green}>FREE</span>
            </div>

            <hr style={styles.line} />

            <div style={styles.totalRow}>
              <strong>Total Amount</strong>
              <strong>₹{finalAmount}</strong>
            </div>

            <button
              style={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f6",
    padding: "35px 70px",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "34px",
    color: "#282c3f",
  },
  summary: {
  background: "#fff",
  padding: "20px",
  border: "1px solid #eaeaec",
  borderRadius: "6px",
  height: "fit-content",
  position: "sticky",
  top: "90px",
},
  wrapper: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "28px",
    maxWidth: "1150px",
    margin: "0 auto",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  offerBox: {
    background: "#fff",
    padding: "18px",
    borderRadius: "6px",
    border: "1px solid #eaeaec",
    color: "#282c3f",
  },
  card: {
    display: "flex",
    background: "#fff",
    border: "1px solid #eaeaec",
    borderRadius: "6px",
    padding: "14px",
    gap: "16px",
  },
  image: {
    width: "120px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  info: {
    flex: 1,
  },
  name: {
    margin: "0 0 6px",
    fontSize: "17px",
    color: "#282c3f",
  },
  category: {
    margin: "0 0 12px",
    color: "#696b79",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  price: {
    fontWeight: "700",
    color: "#282c3f",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#94969f",
  },
  discount: {
    color: "#ff905a",
    fontWeight: "700",
    fontSize: "13px",
  },
  qty: {
    fontWeight: "600",
    color: "#282c3f",
  },
  delivery: {
    color: "#03a685",
    fontWeight: "600",
    fontSize: "14px",
  },
  summary: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #eaeaec",
    borderRadius: "6px",
    height: "fit-content",
  },
  summaryTitle: {
    fontSize: "13px",
    color: "#535766",
    letterSpacing: "0.5px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "14px 0",
    color: "#282c3f",
    fontSize: "15px",
  },
  green: {
    color: "#03a685",
  },
  line: {
    border: "none",
    borderTop: "1px solid #eaeaec",
    margin: "18px 0",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    color: "#282c3f",
  },
  checkoutBtn: {
    width: "100%",
    marginTop: "22px",
    padding: "14px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "700",
    cursor: "pointer",
  },
  emptyBox: {
    maxWidth: "500px",
    margin: "80px auto",
    background: "#fff",
    padding: "45px",
    textAlign: "center",
    borderRadius: "8px",
  },
  shopBtn: {
    display: "inline-block",
    marginTop: "18px",
    padding: "13px 30px",
    background: "#ff3f6c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: "700",
  },
};

export default Card;