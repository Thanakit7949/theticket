import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null); // State สำหรับเก็บข้อมูลการแสดง Modal

  useEffect(() => {
    axios.get('http://localhost:3001/concerts')
      .then(res => setConcerts(res.data))
      .catch(error => console.error('Failed to fetch concerts:', error));
  }, []);

  const openModal = (concert) => {
    setSelectedConcert(concert);
  };

  const closeModal = () => {
    setSelectedConcert(null);
  };

  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-pink-400 tracking-wider">
        Upcoming Concerts
      </h2>

      {/* แสดงการ์ดสำหรับการแสดงคอนเสิร์ต */}
      <div className="carousel-container flex flex-wrap justify-center gap-8">
        {concerts.map(concert => (
          <div key={concert.id} className="concert-card bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105 max-w-xs h-[400px]"
               onClick={() => openModal(concert)}>
            <img src="image1.jpg" alt={concert.name} className="concert-image w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="concert-title text-2xl font-semibold text-pink-500 mb-2">{concert.name}</h3>
            <p className="text-gray-700 mb-1">{concert.date}</p>
            <p className="text-gray-600 mb-4">{concert.location}</p>
            <Link
              to={`/booking/${concert.id}`}
              className="book-btn bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition-all ease-in-out"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      {/* ถ้ามี concert ที่เลือกแล้ว, แสดง modal */}
      {selectedConcert && (
        <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
            <button className="modal-close-btn absolute top-2 right-2 text-black text-3xl font-bold" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedConcert.name}</h2>
            <img src={selectedConcert.image} alt={selectedConcert.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-lg mb-2">Date: {selectedConcert.date}</p>
            <p className="text-lg mb-4">Location: {selectedConcert.location}</p>
            <p className="text-lg mb-4">{selectedConcert.description}</p>
            <button className="book-btn bg-pink-500 text-white py-2 px-6 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConcertList;
