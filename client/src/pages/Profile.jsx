import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birth_date: '',
    gender: '',
  });

  const [isLoading, setIsLoading] = useState(true); // สถานะการโหลด

  // ฟังก์ชันเพื่อแปลงรูปแบบ ISO เป็น yyyy-MM-dd
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2); // เติม 0 ถ้าเดือนมีค่าน้อยกว่า 10
    const day = (`0${date.getDate()}`).slice(-2); // เติม 0 ถ้าวันมีค่าน้อยกว่า 10
    return `${year}-${month}-${day}`;
  };

  // ฟังก์ชันเพื่อดึงข้อมูลจาก localStorage ถ้ามี
  const loadProfileFromLocalStorage = () => {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    return null;
  };

  useEffect(() => {
    const savedProfile = loadProfileFromLocalStorage();

    if (savedProfile) {
      setProfile(savedProfile);
      setIsLoading(false); // เสร็จแล้วไม่ต้องโหลด
    } else if (user && user.id) {
      // ดึงข้อมูลโปรไฟล์ผู้ใช้จาก backend
      axios
        .get(`http://localhost:3001/users/${user.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((res) => {
          const userData = res.data;

          // แปลงวันที่ในโปรไฟล์ให้เข้ากับฟอร์แมตของ HTML input[type="date"]
          if (userData.birth_date) {
            userData.birth_date = formatDate(userData.birth_date);
          }

          setProfile(userData);
          localStorage.setItem('profile', JSON.stringify(userData)); // เก็บใน localStorage
          setIsLoading(false); // เมื่อโหลดข้อมูลเสร็จ
        })
        .catch((err) => console.error('Error fetching profile:', err));
    } else {
      setIsLoading(false); // ถ้าไม่มี user ก็หยุดการโหลด
    }
  }, [user]);

  const handleUpdate = async () => {
    if (!user || !user.id) {
      alert('User ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/users/${user.id}`, profile, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Profile updated successfully!');
      localStorage.setItem('profile', JSON.stringify(profile)); // อัปเดต localStorage หลังจากอัปเดตโปรไฟล์สำเร็จ
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  // แสดงสถานะโหลด ถ้าข้อมูลยังไม่ถูกดึงมา
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            placeholder={profile.first_name || 'First Name'}
          />

          <label>Last Name</label>
          <input
            type="text"
            value={profile.last_name}
            onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
            placeholder={profile.last_name || 'Last Name'}
          />

          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder={profile.email || 'Email'}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder={profile.phone || 'Phone Number'}
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
