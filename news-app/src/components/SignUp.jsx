import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { fetchUserData } from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    fetchUserData().then((data) => {
      setuserdata(data);
    });
  }, []);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dob: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`User ${formData.firstname} registered successfully!`);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          dob: "",
          occupation: "",
        });
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <ToastContainer />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4" style={{ backgroundColor: "#00FFFF" }}>
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter first name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter last name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>

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

                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Occupation</label>
                  <select
                    name="occupation"
                    className="form-select"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Occupation</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
              <p className="text-center mt-3">
                Already have an account? <Link to="/signin">SignIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
