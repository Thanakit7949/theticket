import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/admin/concerts')
      .then(res => setConcerts(res.data))
      .catch(error => console.error('Failed to fetch concerts:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/concerts/${id}`);
      setConcerts(concerts.filter(concert => concert.id !== id));
    } catch (error) {
      console.error('Failed to delete concert:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="concert-list">
        {concerts.map(concert => (
          <div key={concert.id} className="concert-card">
            <h3>{concert.name}</h3>
            <button onClick={() => handleDelete(concert.id)} className="btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
