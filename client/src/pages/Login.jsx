import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalWrapper from './ModalWrapper'; // Import ModalWrapper

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Clear previous error messages
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/login', { email, password });

      if (res.data && res.data.user) {
        const { token, user } = res.data;

        // เก็บ token และ user ใน localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // ทำการอัปเดต state ของ user
        setUser(user);

        // นำทางผู้ใช้ไปยังหน้าที่เหมาะสมตาม role และ ID
        if (user.role === 'admin') {
          navigate(`/admin/${user.id}`);
        } else if (user.role === 'user') {
          navigate(`/user/${user.id}`);
        } else {
          console.error('Invalid user role');
        }
      } else {
        console.error('Login failed: User data is missing');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Clear user state
    setUser(null);

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src="logo_url_here" alt="The Ticket" className="logo" />
        </div>

        <div className="login-tabs">
          <button className="tab active">Email</button>
          <button className="tab">Phone</button>
        </div>

        <div className="login-inputs">
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
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="recaptcha-box">
          <input type="checkbox" />
          <span>I’m not a robot</span>
        </div>

        <button onClick={handleLogin} className="login-button">
          เข้าสู่ระบบ
        </button>

        <div className="or-section">
          <span>หรือ</span>
        </div>

        <div className="social-login">
          <button className="social-button facebook">Continue with Facebook</button>
          <button className="social-button google">Sign up with Google</button>
          <button className="social-button apple">Sign in with Apple</button>
        </div>

        <div className="register-section">
          <span>หากคุณยังไม่เป็นสมาชิก</span>
          <ModalWrapper />
        </div>
        
        {/* ปุ่มล็อกเอ้าท์ */}
        <button onClick={handleLogout} className="logout-button">
          ล็อกเอ้าท์
        </button>
      </div>
    </div>
  );
};

export default Login;
