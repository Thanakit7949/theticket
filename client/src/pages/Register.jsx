import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

const Register = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/register', { email, password, phone });
      closeModal(); // Close modal on successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="login-input"
        />
        <button
          onClick={handleRegister}
          className="login-button"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
