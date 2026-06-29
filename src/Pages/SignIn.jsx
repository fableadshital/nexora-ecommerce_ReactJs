import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Login Successful");
    navigate("/profile");
  };

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h1>Sign In</h1>

        <input name="name" placeholder="Full Name" onChange={handleChange} style={styles.input} />
        <input name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
        <input name="phone" placeholder="Phone" onChange={handleChange} style={styles.input} />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f6f6f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "380px",
    background: "#fff",
    padding: "35px",
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
  button: {
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    background: "#ff3f6c",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },
};

export default SignIn;