import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const navigate = useNavigate(); // for redirecting
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8081/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // store token or user data
        localStorage.setItem("user", JSON.stringify(data));
        toast.success(`Welcome back, ${data.firstname || "User"}!`);
        setTimeout(() => navigate("/news"), 2000); // redirect after 2s
      } else {
        const errorText = await response.text();
        toast.error(`Login failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-lg p-4" style={{ backgroundColor: "#00FFFF" }}>
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <a href="/register">Register</a>
              </p>
              <p className="text-center">
                <a href="/forgot-password">Forgot Password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
