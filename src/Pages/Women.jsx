import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const womenProducts = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400",
  },
  {
    id: 2,
    name: "Pink Party Gown",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
  },
  {
    id: 3,
    name: "Casual Top & Jeans",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
  },
  {
    id: 4,
    name: "Women's Jacket",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
  },
];

function Women() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "40px",
        background: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Women's Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {womenProducts.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{item.name}</h3>

              <h2 style={{ color: "#ff3f6c" }}>{item.price}</h2>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#ff3f6c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
                onClick={() => dispatch(addToCart(item))}
              >

                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;