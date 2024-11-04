import React, { useState } from 'react';
import admin1 from '../../Asserts/admin1.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Admin.css";

export default function Admin() {
  const [formData, setFormData] = useState({
    Email: '',
    Password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' }); // Reset errors on input change
  };

  // Validate email and password
  const validate = () => {
    let validationErrors = {};
    if (!formData.Email) {
      validationErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      validationErrors.Email = 'Email is invalid';
    }

    if (!formData.Password) {
      validationErrors.Password = 'Password is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop submission if validation fails

    try {
      setIsSubmitting(true); // Set loading to true
      const response = await axios.post('http://localhost:4000/login', formData);
      if (response.data.success) {
        alert(response.data.message);
        // Store a token to represent the session (this could come from your API)
      localStorage.setItem('token', 'your-session-token');
        navigate('/admin-dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert('An error occurred during login. Please try again later.');
    } finally {
      setIsSubmitting(false); // Stop loading state
    }
  };

  return (
    // <section className="vh-100 mb-3 cont1">
      
        <div className="admin row d-flex justify-content-center align-items-center m-4">
          <div className="col-md-6">
            <img src={admin1} className="img-fluid" alt="Admin illustration" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h3 className="text-danger fw-bold mb-4 mt-3 text-center"> LOGIN</h3>
              <div className="login mb-4">
                <p className="lead fw-bolder mb-0 me-3 ">Login to your account</p>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input
                  type="email"
                  id="form3Example3"
                  name="Email"
                  className="form-control form-control-md"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Enter a valid email address"
                />
                {errors.Email && <span className="text-danger">{errors.Email}</span>}
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input
                  type="password"
                  id="form3Example4"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                {errors.Password && <span className="text-danger">{errors.Password}</span>}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <Link to="#" className="text-primary">Forgot password?</Link>
              </div>

              <div className="col-md-12 text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                  <Link to="./signup" className="link-danger"> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      // </div>
    // </section>
  );
}