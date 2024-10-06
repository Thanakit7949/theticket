import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ConcertList from './pages/ConcertList';
import Products from './pages/Products';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';
import NavigationBar from './pages/NavigationBar';
import Concerts from './pages/Concerts';
import Sports from './pages/Sports';
import BusConcert from './ComponentImage/BusConcert';   
import Got7Concert from './ComponentImage/Got7Concert';   
import NctConcert from './ComponentImage/NctConcert';   
import PixxiConcert from './ComponentImage/PixxiConcert';   
import LyknConcert from './ComponentImage/LyknConcert';  
import BuyTicketSport from './pages/BuyTicketSport'; 
import BuyTicketCon from './pages/BuyTicketCon'; 
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);  // State สำหรับควบคุมป๊อปอัพ Login
  const [showRegister, setShowRegister] = useState(false);  // State สำหรับควบคุมป๊อปอัพ Register
  const [isPaused, setIsPaused] = useState(false);  // สถานะการหยุด marquee

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

  // ฟังก์ชันที่ใช้เปลี่ยนสถานะการหยุด marquee เมื่อเม้าท์เข้าหรือออกจากข้อความ
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <Router>
      <div className="container mx-auto px-4 py-4">
        {/* Scrolling Text */}
        <div className="marquee-container" 
             onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave}>
          <p className="marquee-text" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            Welcome to the INTERGETHER CONCERTS & SPORTS! Enjoy the best events and experiences.
          </p>
        </div>

        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">INTERGETHER</Link>
          <div className="space-x-4">
            {!user ? (
              <>
                {/* เปิดป๊อปอัพ Login เมื่อกด */}
                <button onClick={() => setShowLogin(true)} className="btn">Login</button>
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
            <Route path="/products" element={<Products />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/buy-ticketsport/:id" element={<BuyTicketSport />} /> {/* เส้นทางสำหรับหน้าซื้อบัตรกีฬา */}
            <Route path="/buy-ticketCon/:id" element={<BuyTicketCon />} /> {/* เส้นทางสำหรับหน้าซื้อบัตรคอนเสิร์ต */}
            <Route path="/busconcert" element={<BusConcert />} />
            <Route path="/got7concert" element={<Got7Concert />} />
            <Route path="/nctconcert" element={<NctConcert />} />
            <Route path="/pixxiconcert" element={<PixxiConcert />} />
            <Route path="/lyknconcert" element={<LyknConcert />} />
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
