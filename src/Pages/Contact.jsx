import React, { useState } from "react";
import toast from "react-hot-toast";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
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
    <div className="contact-page">
      <div className="contact-card">
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>

          <p className="contact-text">
            Have any questions? Send us a message and our team will contact you soon.
          </p>

          <div className="contact-info">
            <h3>Email</h3>
            <p>support@nexora.com</p>
          </div>

          <div className="contact-info">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-info">
            <h3>Address</h3>
            <p>Surat, Gujarat, India</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="contact-form-title">Send Message</h2>

          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="contact-input"
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;