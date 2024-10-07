import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birth_date: '',
    gender: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null); // State สำหรับภาพโปรไฟล์

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedProfile) {
      setProfile(savedProfile);
      setImage(savedProfile.profile_image); // โหลด URL ของภาพจากโปรไฟล์ที่เก็บไว้
      setIsLoading(false);
    } else if (savedUser && savedUser.id) {
      axios.get(`http://localhost:3001/users/${savedUser.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
        .then(res => {
          const userData = res.data;

          // แปลงวันที่ในโปรไฟล์ให้เข้ากับฟอร์แมตของ HTML input[type="date"]
          if (userData.birth_date) {
            userData.birth_date = formatDate(userData.birth_date);
          }

          setProfile(userData);
          setImage(userData.profile_image); // โหลด URL ของภาพโปรไฟล์จากฐานข้อมูล
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching profile:', err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('userId', JSON.parse(localStorage.getItem('user')).id); // ส่ง userId

      axios.post('http://localhost:3001/uploads', formData)
        .then(response => {
          console.log('Image uploaded successfully:', response.data);
          setImage(response.data.imageUrl); // เก็บ URL ของภาพใน state
          // อัปเดตโปรไฟล์ด้วย URL ใหม่
          setProfile((prevProfile) => ({
            ...prevProfile,
            profile_image: response.data.imageUrl,
          }));
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    }
  };

  // อัปเดตฟังก์ชัน handleUpdate
  const handleUpdate = async () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser || !savedUser.id) {
      alert('User ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/users/${savedUser.id}`, {
        ...profile,
        profile_image: image // ส่ง URL ของภาพโปรไฟล์
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Profile updated successfully!');
      localStorage.setItem('profile', JSON.stringify(profile));
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <h2>โปรไฟล์</h2>

        <div className="profile-picture">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image ? (
            <img src={image} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
          ) : (
            <img src="/path/to/default-profile-pic" alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
          )}
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
