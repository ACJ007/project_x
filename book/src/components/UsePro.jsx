import React, { useState } from 'react';

const UsePro= () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://example.com/avatar.jpg'
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
    <div>
      <h2>Profile Page</h2>
      <div>
        <img src={user.avatar} alt="Avatar" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={handleProfileUpdate}>Edit Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UsePro;
