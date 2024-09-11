import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/concerts')
      .then(res => setConcerts(res.data))
      .catch(error => console.error('Failed to fetch concerts:', error));
  }, []);

  return (
    <div className="bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Discover Concerts</h2>
      <div className="carousel-container">
        {concerts.map(concert => (
          <div key={concert.id} className="concert-card">
            <img src={concert.image} alt={concert.name} className="concert-image" />
            <h3 className="concert-title">{concert.name}</h3>
            <p>{concert.date}</p>
            <p>{concert.location}</p>
            <Link
              to={`/booking/${concert.id}`}
              className="book-btn"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcertList;
