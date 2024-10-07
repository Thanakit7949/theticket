// Booking.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { concertId } = useParams();
  const navigate = useNavigate(); // สร้างตัวแปรสำหรับนำทาง
  const [seats, setSeats] = useState(1);
  const [pricePerSeat, setPricePerSeat] = useState(50); // สมมุติว่าราคา 50 ต่อที่นั่ง
  const grandTotal = pricePerSeat * seats; // คำนวณราคารวม

  const handleBooking = async () => {
    try {
      await axios.post(`http://localhost:3001/bookings`, { concertId, seats }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      // เมื่อการจองสำเร็จ, นำทางไปยังหน้า ReceiptProduct
      navigate('/receipt', { state: { items: [{ id: concertId, name: 'Concert Ticket', price: pricePerSeat, quantity: seats, total: grandTotal }], grandTotal } });
      
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="booking-container">
      <h2>Book your seat</h2>
      <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} min="1" />
      <button onClick={handleBooking} className="btn">Book Now</button>
    </div>
  );
};

export default Booking;
