// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // นำเข้า Sidebar

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birth_date: '',
    gender: '',
  });

  useEffect(() => {
    if (user && user.id) {
      // ดึงข้อมูลโปรไฟล์ผู้ใช้
      axios.get(`http://localhost:3001/users/${user.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(res => setProfile(res.data))
      .catch(err => console.error('Error fetching profile:', err));
    }
  }, [user]);

  const handleUpdate = async () => {
    if (!user || !user.id) {
      alert('User ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/users/${user.id}`, profile, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <h2>โปรไฟล์</h2>

        <div className="profile-picture">
          {/* คุณสามารถเพิ่มคอมโพเนนต์อัพโหลดรูปภาพที่นี่ */}
          <img src="/path/to/profile-pic" alt="Profile" />
        </div>

        <div className="profile-form">
          <label>First Name</label>
          <input
            type="text"
            value={profile.first_name}
            onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
            placeholder="First Name"
          />

          <label>Last Name</label>
          <input
            type="text"
            value={profile.last_name}
            onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
            placeholder="Last Name"
          />

          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="Phone Number"
          />

          <label>Birth Date</label>
          <input
            type="date"
            value={profile.birth_date}
            onChange={(e) => setProfile({ ...profile, birth_date: e.target.value })}
          />

          <label>Gender</label>
          <select
            value={profile.gender}
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
