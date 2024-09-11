import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { concertId } = useParams();
  const [seats, setSeats] = useState(1);

  const handleBooking = async () => {
    try {
      await axios.post(`http://localhost:3001/bookings`, { concertId, seats }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Booking successful!');
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
