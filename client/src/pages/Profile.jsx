import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: ''
  });

  useEffect(() => {
    if (user && user.id) {
      // Fetch user profile information
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
    <div className="profile-container">
      <h2>Profile</h2>
      <input
        type="text"
        value={profile.first_name}
        onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        value={profile.last_name}
        onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
        placeholder="Last Name"
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;
