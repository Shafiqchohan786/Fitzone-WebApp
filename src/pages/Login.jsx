import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://fitzone-webapp.zeabur.app/api/auth/login", formData);

      if (res.data.message === "Login successful.") {
        await MySwal.fire({
          icon: "success",
          title: "Logged In!",
          text: "You have successfully logged in to FitZone.",
          timer: 2500,
          showConfirmButton: false,
          zIndex: 3000,
        });
        navigate("/");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials!",
          zIndex: 3000,
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Login failed. Please check your credentials.",
        zIndex: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box login-modal">
        <span className="close-btn" onClick={() => navigate("/")}>×</span>
        <h2>Login to FitZone</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
