import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOnlinePayment = () => {
  const options = {
    key: "rzp_test_SxQwUiyDrfhj7h", // Razorpay Test Key
    amount: total * 100,
    currency: "INR",
    name: "NEXORA",
    description: "Shopping Payment",

    handler: function (response) {
      alert("Payment Successful");

      console.log(response);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

//   if (form.payment === "cod") {
//     alert("Order Placed Successfully");

//     navigate("/success");
//   } else {
//     handleOnlinePayment();
//   }

if (form.payment === "cod") {
  navigate("/thankyou");
} else {
  handleOnlinePayment();
}
};
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Checkout</h1>

      <div style={styles.wrapper}>
        <form style={styles.form} onSubmit={handleOrder}>
          <h2>Shipping Details</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} style={styles.input} />
          <input name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} style={styles.input} />
          <textarea name="address" placeholder="Address" onChange={handleChange} style={styles.textarea} />
          <input name="city" placeholder="City" onChange={handleChange} style={styles.input} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} style={styles.input} />

          <h2>Payment Method</h2>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={form.payment === "cod"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="online"
              checked={form.payment === "online"}
              onChange={handleChange}
            />
            Online Payment
          </label>

          {/* <button type="submit" style={styles.button}>
            Place Order
          </button> */}

          <button type="submit">
  Place Order
</button>
        </form>

        <div style={styles.summary}>
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} style={styles.product}>
              <img src={item.image} alt={item.name} style={styles.image} />

              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <hr />
          <h2>Total: ₹{total}</h2>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f6f6f6",
    minHeight: "100vh",
    padding: "50px",
  },
  title: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "35px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  },
  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "100px",
  },
  button: {
    padding: "15px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
  },
  summary: {
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    height: "fit-content",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  },
  product: {
    display: "flex",
    gap: "15px",
    marginBottom: "18px",
  },
  image: {
    width: "90px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default Checkout;