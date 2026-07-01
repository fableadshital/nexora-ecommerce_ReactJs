import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaTruck, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.oldPrice * item.quantity,
    0
  );

  const discount = totalMRP - total;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnlinePayment = () => {
    const options = {
      key: "rzp_test_SxQwUiyDrfhj7h",
      amount: total * 100,
      currency: "INR",
      name: "NEXORA",
      description: "Shopping Payment",

      handler: function (response) {
        console.log(response);
        alert("Payment Successful");
        navigate("/success");
      },

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#ff3f6c",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (form.payment === "cod") {
      navigate("/thankyou");
    } else {
      handleOnlinePayment();
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div>
            <h1 style={styles.title}>Checkout</h1>
            <p style={styles.subtitle}>
              Complete your order with secure checkout.
            </p>
          </div>

          {/* <div style={styles.secureBox}>
            <FaLock /> Secure Payment
          </div> */}
        </div>

        {cartItems.length === 0 ? (
          <div style={styles.emptyBox}>
            <h2>Your cart is empty</h2>
            <p>Please add products before checkout.</p>
            <Link to="/products" style={styles.shopBtn}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div style={styles.wrapper}>
            <form style={styles.form} onSubmit={handleOrder}>
              <div style={styles.sectionHeader}>
                <span style={styles.step}>1</span>
                <h2>Shipping Details</h2>
              </div>

              <div style={styles.inputGrid}>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  style={styles.input}
                  maxLength="10"
                />

                <input
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  style={styles.input}
                  maxLength="6"
                />
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                style={styles.textarea}
              />

              <div style={styles.sectionHeader}>
                <span style={styles.step}>2</span>
                <h2>Payment Method</h2>
              </div>

              <div style={styles.paymentBox}>
                <label
                  style={{
                    ...styles.paymentCard,
                    borderColor:
                      form.payment === "cod" ? "#ff3f6c" : "#e5e7eb",
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                  />
                  <FaMoneyBillWave />
                  <div>
                    <strong>Cash on Delivery</strong>
                    <p>Pay when your order arrives.</p>
                  </div>
                </label>

                <label
                  style={{
                    ...styles.paymentCard,
                    borderColor:
                      form.payment === "online" ? "#ff3f6c" : "#e5e7eb",
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={form.payment === "online"}
                    onChange={handleChange}
                  />
                  <FaCreditCard />
                  <div>
                    <strong>Online Payment</strong>
                    <p>Pay securely using Razorpay.</p>
                  </div>
                </label>
              </div>

              <button type="submit" style={styles.button}>
                Place Order
              </button>
            </form>

            <div style={styles.summary}>
              <h2 style={styles.summaryTitle}>Order Summary</h2>

              <div style={styles.deliveryBox}>
                <FaTruck />
                <span>Free delivery in 3-5 days</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} style={styles.product}>
                  <img src={item.image} alt={item.name} style={styles.image} />

                  <div style={styles.productInfo}>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                </div>
              ))}

              <hr style={styles.line} />

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
                <strong>Total</strong>
                <strong>₹{total}</strong>
              </div>
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
    padding: "45px 20px",
  },

  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },

  title: {
    margin: 0,
    fontSize: "38px",
    color: "#111827",
  },

  subtitle: {
    margin: "8px 0 0",
    color: "#6b7280",
  },

  secureBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#fff",
    padding: "12px 18px",
    borderRadius: "30px",
    color: "#03a685",
    fontWeight: "800",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },

  wrapper: {
    display: "grid",
    gridTemplateColumns: "1.45fr 0.9fr",
    gap: "28px",
    alignItems: "start",
  },

  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },

  step: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#ff3f6c",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },

  inputGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },

  input: {
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "15px",
  },

  textarea: {
    width: "100%",
    marginTop: "15px",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    minHeight: "105px",
    outline: "none",
    fontSize: "15px",
    resize: "vertical",
    boxSizing: "border-box",
  },

  paymentBox: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    marginBottom: "25px",
  },

  paymentCard: {
    display: "flex",
    gap: "12px",
    padding: "18px",
    border: "2px solid #e5e7eb",
    borderRadius: "16px",
    cursor: "pointer",
    color: "#111827",
  },

  button: {
    width: "100%",
    padding: "16px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontWeight: "800",
    fontSize: "16px",
    cursor: "pointer",
  },

  summary: {
    background: "#fff",
    padding: "24px",
    borderRadius: "20px",
    height: "fit-content",
    position: "sticky",
    top: "90px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  summaryTitle: {
    marginTop: 0,
  },

  deliveryBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#ecfdf5",
    color: "#047857",
    padding: "13px",
    borderRadius: "12px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  product: {
    display: "flex",
    gap: "14px",
    marginBottom: "16px",
    paddingBottom: "16px",
    borderBottom: "1px solid #f1f1f1",
  },

  image: {
    width: "82px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  productInfo: {
    flex: 1,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "14px 0",
    color: "#374151",
  },

  green: {
    color: "#03a685",
    fontWeight: "800",
  },

  line: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "18px 0",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    color: "#111827",
  },

  emptyBox: {
    maxWidth: "520px",
    margin: "80px auto",
    background: "#fff",
    padding: "50px",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  shopBtn: {
    display: "inline-block",
    marginTop: "18px",
    padding: "13px 30px",
    background: "#ff3f6c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "800",
  },
};

export default Checkout;