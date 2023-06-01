import React, { useState } from 'react';


const UsePro = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://rosieshouse.org/wp-content/uploads/2016/06/avatar-large-square.jpg'
  });

  const handleLogout = () => {
    // Code to handle logout
    // Redirect user or perform other actions
  };

  const handleProfileUpdate = () => {
    // Code to handle profile update
    // Redirect user to profile edit page or perform other actions
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-card">
        <img className="avatar" src={user.avatar} alt="Avatar" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="profile-buttons">
        <button className="edit-button" onClick={handleProfileUpdate}>Edit Profile</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UsePro;
