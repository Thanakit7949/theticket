import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ConcertList from './pages/ConcertList';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';
import NavigationBar from './pages/NavigationBar';
import Concerts from './pages/Concerts';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);  // State สำหรับควบคุมป๊อปอัพ Login
  const [showRegister, setShowRegister] = useState(false);  // State สำหรับควบคุมป๊อปอัพ Register

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setUser(res.data))
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">The Ticket</Link>
          <div className="space-x-4">
            {!user ? (
              <>
                {/* เปิดป๊อปอัพ Login เมื่อกด */}
                <button onClick={() => setShowLogin(true)} className="btn">Login</button>
                {/* เปิดป๊อปอัพ Register เมื่อกด */}
                {/* <button onClick={() => setShowRegister(true)} className="btn">Register</button> */}
              </>
            ) : (
              <>
                <Link to="/profile" className="btn">Profile</Link>
                <button onClick={handleLogout} className="btn">Logout</button>
              </>
            )}
          </div>
        </nav>

        <NavigationBar />

        {/* ส่วนของป๊อปอัพ Login */}
        {showLogin && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={() => setShowLogin(false)} className="close-button">X</button>
              <Login setUser={setUser} />
            </div>
          </div>
        )}

        {/* ส่วนของป๊อปอัพ Register */}
        {showRegister && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button onClick={() => setShowRegister(false)} className="close-button">X</button>
              <Register />
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<ConcertList />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/booking/:concertId" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
