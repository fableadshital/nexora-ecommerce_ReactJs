import React from "react";
import { useSelector } from "react-redux";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No Products in Wishlist</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 5px 10px rgba(0,0,0,.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <h2>₹{item.price}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;