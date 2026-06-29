import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  if (!user) {
    return (
      <div style={styles.loginBox}>
        <h2>Please login first</h2>
        <button style={styles.loginBtn} onClick={() => navigate("/signin")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <h2 style={styles.name}>{user.name}</h2>

        <div style={styles.info}>
          <span style={styles.icon}>✉️</span>
          <span>{user.email}</span>
        </div>

        <div style={styles.info}>
          <span style={styles.icon}>📞</span>
          <span>{user.phone}</span>
        </div>

        <button style={styles.logout} onClick={logout}>
          ↪ Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },

  card: {
    width: "430px",
    background: "#fff",
    padding: "42px",
    borderRadius: "28px",
    textAlign: "center",
    boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
  },

  avatar: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    margin: "0 auto 25px",
    background: "linear-gradient(135deg, #ff8aa5, #ff4f81)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "82px",
    fontWeight: "800",
    border: "8px solid #fff",
    boxShadow: "0 10px 25px rgba(255,63,108,0.35)",
  },

  name: {
    fontSize: "38px",
    fontWeight: "800",
    color: "#222",
    marginBottom: "30px",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "18px 0",
    borderBottom: "1px solid #eee",
    fontSize: "20px",
    color: "#555",
    textAlign: "left",
  },

  icon: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#ffe5ec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    flexShrink: 0,
  },

  logout: {
    width: "100%",
    marginTop: "35px",
    padding: "16px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg, #ff5b6b, #ff2d78)",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
  },

  loginBox: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  loginBtn: {
    padding: "12px 25px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Profile;