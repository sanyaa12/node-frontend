import React, { useState } from 'react';
import '../common/signup.css';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.first) formErrors.first = "First name is required";
    if (!formData.last) formErrors.last = "Last name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Signup successful");
      navigate('/login');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="main">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            name="first"
            value={formData.first}
            onChange={handleChange}
          />
          {errors.first && <p>{errors.first}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            id="last"
            name="last"
            value={formData.last}
            onChange={handleChange}
          />
          {errors.last && <p>{errors.last}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
