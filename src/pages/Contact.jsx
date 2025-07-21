import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Yahan apni image ko import karein, src/assets folder ke relative path se:
import fitnessImg from "../assets/fitness6.jpg";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://fitzone-webapp.zeabur.app/api/contact/send/mail", formData);

      if (res.data.success) {
        await MySwal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Thank you for contacting us. We'll get back to you soon.",
          timer: 3000,
          showConfirmButton: false,
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Server error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-img">
          {/* Use imported image variable here */}
          <img src={fitnessImg} alt="Contact" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="btn-filled" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
