import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests

const Adlog = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend server
      const response = await axios.post('/login', { email, password });
      console.log(response.data.message);
      alert('LOGIN SUCCESSFUL');
      // Redirect or perform any actions for successful login
    } catch (error) {
      console.log('Admin login failed:', error.response.data.error);
      alert('LOGIN FAILED');
      // Display error message or perform any actions for failed login
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '100%', marginTop: '22vh' }}>
      <Box
        sx={{
          borderRadius: 2,
          height: '55vh',
          width: '50vh',
          backgroundColor: 'rgb(255, 255, 255)',
          opacity: 11,
          border: '3px solid black',
          textAlign: 'center'
        }}
      >
        <br /><br /><br /><br /><br />
        <h1>ADMIN SIGN IN</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <br /><br />
          <TextField
            label="Password"
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <br /><br />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Adlog;
