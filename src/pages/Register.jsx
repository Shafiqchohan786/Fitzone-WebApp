import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://fitzone-webapp.zeabur.app/api/auth/register", formData);

      if (res.data.message === "User registered successfully.") {
        await MySwal.fire({
          icon: "success",
          title: "Success!",
          text: "You have registered successfully. Please login now.",
          timer: 3000,
          showConfirmButton: false,
          zIndex: 3000,
        });
        navigate("/login");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: res.data.message || "Registration failed.",
          zIndex: 3000,
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Server error.",
        zIndex: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box register-modal">
        <span className="close-btn" onClick={() => navigate("/")}>×</span>
        <h2>Create an Account</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="btn-filled" type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
