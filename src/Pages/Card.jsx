import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { removeFromCart, addToCart ,decreaseQuantity,} from "../features/cartSlice";

function Card() {
  const dispatch = useDispatch();
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
  const finalAmount = total;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
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
                <p>Free delivery on all orders. Limited time offer.</p>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} style={styles.card}>
                  <img src={item.image} alt={item.name} style={styles.image} />

                  <div style={styles.info}>
                    <div style={styles.topRow}>
                      <div>
                        <h3 style={styles.name}>{item.name}</h3>
                        <p style={styles.category}>{item.category}</p>
                      </div>

                      <button
                        style={styles.deleteBtn}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div style={styles.priceRow}>
                      <span style={styles.price}>₹{item.price}</span>
                      <span style={styles.oldPrice}>₹{item.oldPrice}</span>
                      <span style={styles.discount}>Save ₹{item.oldPrice - item.price}</span>
                    </div>

                    <div style={styles.bottomRow}>
                      <div style={styles.qtyBox}>
                        {/* <button style={styles.qtyBtn}>
                          <FaMinus />
                        </button> */}

                        <button
  style={styles.qtyBtn}
  onClick={() => dispatch(decreaseQuantity(item.id))}
>
  <FaMinus />
</button>

                        <span style={styles.qtyText}>{item.quantity}</span>

                        <button
                          style={styles.qtyBtn}
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <p style={styles.delivery}>Delivery in 3-5 days</p>
                    </div>
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
                <span>Discount</span>
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
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f5f7",
    padding: "40px 20px",
  },

  container: {
    maxWidth: "1150px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "34px",
    color: "#1f2937",
  },

  wrapper: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "26px",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  offerBox: {
    background: "#fff",
    padding: "18px 20px",
    borderRadius: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  },

  card: {
    display: "flex",
    gap: "18px",
    background: "#fff",
    padding: "16px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  image: {
    width: "135px",
    height: "170px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  info: {
    flex: 1,
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },

  name: {
    margin: "0 0 6px",
    fontSize: "18px",
    color: "#111827",
  },

  category: {
    margin: 0,
    color: "#6b7280",
  },

  deleteBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "#fff0f3",
    color: "#ff3f6c",
    cursor: "pointer",
  },

  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "18px 0",
  },

  price: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#111827",
  },

  oldPrice: {
    color: "#9ca3af",
    textDecoration: "line-through",
  },

  discount: {
    color: "#03a685",
    fontWeight: "700",
    fontSize: "14px",
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#f3f4f6",
    padding: "8px 12px",
    borderRadius: "30px",
  },

  qtyBtn: {
    border: "none",
    background: "#fff",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    cursor: "pointer",
  },

  qtyText: {
    fontWeight: "800",
  },

  delivery: {
    color: "#03a685",
    fontWeight: "700",
    fontSize: "14px",
  },

  summary: {
    background: "#fff",
    padding: "22px",
    borderRadius: "16px",
    height: "fit-content",
    position: "sticky",
    top: "90px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  summaryTitle: {
    fontSize: "14px",
    color: "#6b7280",
    letterSpacing: "1px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px 0",
    color: "#374151",
  },

  green: {
    color: "#03a685",
    fontWeight: "700",
  },

  line: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "18px 0",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    color: "#111827",
  },

  checkoutBtn: {
    width: "100%",
    marginTop: "22px",
    padding: "15px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: "800",
    cursor: "pointer",
  },

  emptyBox: {
    maxWidth: "500px",
    margin: "80px auto",
    background: "#fff",
    padding: "50px",
    textAlign: "center",
    borderRadius: "18px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  shopBtn: {
    display: "inline-block",
    marginTop: "18px",
    padding: "13px 30px",
    background: "#ff3f6c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "800",
  },
};

export default Card;