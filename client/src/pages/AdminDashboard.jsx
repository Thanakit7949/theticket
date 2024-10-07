import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAdmin from './SidebaraAdmin'; // แก้ไขนำเข้าให้ใช้ SidebarAdmin
import './AdminDashboard.css'; // เพิ่มสไตล์สำหรับ Admin Dashboard

const AdminDashboard = () => {
  const [concerts, setConcerts] = useState([]);
  const [concertForm, setConcertForm] = useState({
    id: '',
    name: '',
    description: '',
    date: '',
    location: '',
    price: '',
    available_seats: '',
    concert_id: ''
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchConcerts();
  }, []);

  const fetchConcerts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/admin/concerts');
      setConcerts(res.data);
    } catch (error) {
      console.error('Failed to fetch concerts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/concerts/${id}`);
      setConcerts(concerts.filter(concert => concert.id !== id));
    } catch (error) {
      console.error('Failed to delete concert:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      // Update concert
      try {
        await axios.put(`http://localhost:3001/admin/concerts/${concertForm.id}`, concertForm);
        setConcerts(concerts.map(concert => (concert.id === concertForm.id ? concertForm : concert)));
        setEditing(false);
      } catch (error) {
        console.error('Failed to update concert:', error);
      }
    } else {
      // Create new concert
      try {
        const res = await axios.post('http://localhost:3001/admin/concerts', concertForm);
        setConcerts([...concerts, res.data]);
      } catch (error) {
        console.error('Failed to create concert:', error);
      }
    }
    setConcertForm({ id: '', name: '', description: '', date: '', location: '', price: '', available_seats: '', concert_id: '' });
  };

  const handleEdit = (concert) => {
    setConcertForm(concert);
    setEditing(true);
  };

  return (
    <div className="admin-dashboard">
      <SidebarAdmin /> {/* ใช้ SidebarAdmin แทน Sidebar */}
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <label>Concert Name</label>
          <input
            type="text"
            value={concertForm.name}
            onChange={(e) => setConcertForm({ ...concertForm, name: e.target.value })}
            required
          />
          <label>Description</label>
          <input
            type="text"
            value={concertForm.description}
            onChange={(e) => setConcertForm({ ...concertForm, description: e.target.value })}
            required
          />
          <label>Date</label>
          <input
            type="date"
            value={concertForm.date}
            onChange={(e) => setConcertForm({ ...concertForm, date: e.target.value })}
            required
          />
          <label>Location</label>
          <input
            type="text"
            value={concertForm.location}
            onChange={(e) => setConcertForm({ ...concertForm, location: e.target.value })}
            required
          />
          <label>Price</label>
          <input
            type="number"
            value={concertForm.price}
            onChange={(e) => setConcertForm({ ...concertForm, price: e.target.value })}
            required
          />
          <label>Available Seats</label>
          <input
            type="number"
            value={concertForm.available_seats}
            onChange={(e) => setConcertForm({ ...concertForm, available_seats: e.target.value })}
            required
          />
          <label>Concert ID</label>
          <input
            type="text"
            value={concertForm.concert_id}
            onChange={(e) => setConcertForm({ ...concertForm, concert_id: e.target.value })}
            required
          />
          <button type="submit" className="btn">{editing ? 'Update Concert' : 'Add Concert'}</button>
        </form>

        <div className="concert-list">
          {concerts.map(concert => (
            <div key={concert.id} className="concert-card">
              <h3>{concert.name}</h3>
              <button onClick={() => handleEdit(concert)} className="btn">Edit</button>
              <button onClick={() => handleDelete(concert.id)} className="btn">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
