// import React, { useState } from "react";
// import toast from "react-hot-toast";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
//       setFormData({ ...formData, phone: onlyNumbers });
//       return;
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//  const handleSubmit = (e) => {
//   e.preventDefault();

//   if (
//     !formData.name ||
//     !formData.email ||
//     !formData.phone ||
//     !formData.message
//   ) {
//     toast.error("Please fill all fields");
//     return;
//   }

//   if (formData.phone.length !== 10) {
//     toast.error("Phone number must be 10 digits");
//     return;
//   }

//   toast.success("Form submitted successfully!");

//   setFormData({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
// };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <div style={styles.left}>
//           <h1>Contact Us</h1>
//           <p>
//             Have any questions? Send us a message and our team will contact you soon.
//           </p>

//           <div style={styles.infoBox}>
//             <h3>Email</h3>
//             <p>support@nexora.com</p>
//           </div>

//           <div style={styles.infoBox}>
//             <h3>Phone</h3>
//             <p>+91 98765 43210</p>
//           </div>

//           <div style={styles.infoBox}>
//             <h3>Address</h3>
//             <p>Surat, Gujarat, India</p>
//           </div>
//         </div>

//         <form style={styles.form} onSubmit={handleSubmit}>
//           <h2>Send Message</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             style={styles.input}
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             style={styles.textarea}
//           />

//           <button type="submit" style={styles.button}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "#f7f7f7",
//     padding: "60px 40px",
//   },
//   card: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     background: "#fff",
//     borderRadius: "18px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     overflow: "hidden",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//   },
//   left: {
//     background: "#ff3f6c",
//     color: "#fff",
//     padding: "50px",
//   },
//   infoBox: {
//     marginTop: "25px",
//   },
//   form: {
//     padding: "50px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "18px",
//   },
//   input: {
//     padding: "14px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     fontSize: "15px",
//   },
//   textarea: {
//     padding: "14px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     fontSize: "15px",
//     resize: "none",
//   },
//   button: {
//     padding: "14px",
//     background: "#ff3f6c",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },

// };


// export default Contact;


import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: onlyNumbers });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    toast.success("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        ...styles.page,
        padding: isMobile ? "20px 12px" : "60px 40px",
      }}
    >
      <div
        style={{
          ...styles.card,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        <div
          style={{
            ...styles.left,
            padding: isMobile ? "30px 20px" : "50px",
          }}
        >
          <h1 style={styles.title}>Contact Us</h1>

          <p style={styles.text}>
            Have any questions? Send us a message and our team will contact you
            soon.
          </p>

          <div style={styles.infoBox}>
            <h3>Email</h3>
            <p>support@nexora.com</p>
          </div>

          <div style={styles.infoBox}>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div style={styles.infoBox}>
            <h3>Address</h3>
            <p>Surat, Gujarat, India</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            ...styles.form,
            padding: isMobile ? "30px 20px" : "50px",
          }}
        >
          <h2 style={styles.formTitle}>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f7f7f7",
  },

  card: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "18px",
    display: "grid",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  },

  left: {
    background: "#ff3f6c",
    color: "#fff",
  },

  title: {
    fontSize: "36px",
    marginBottom: "15px",
  },

  text: {
    lineHeight: "28px",
    marginBottom: "25px",
  },

  infoBox: {
    marginTop: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  formTitle: {
    fontSize: "28px",
    marginBottom: "5px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    resize: "none",
    outline: "none",
  },

  button: {
    padding: "14px",
    background: "#ff3f6c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Contact;