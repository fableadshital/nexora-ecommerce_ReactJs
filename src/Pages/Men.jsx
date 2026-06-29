import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const menProducts = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "₹1,799",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  },
  {
    id: 3,
    name: "Hoodie",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400",
  },
  {
    id: 4,
    name: "Formal Blazer",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
  },
];



function Men() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "40px", background: "#f8f8f8", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Men's Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {menProducts.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,.1)",
              transition: ".3s",
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

              {/* <button
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
              >
                Add to Cart
              </button> */}

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

export default Men;