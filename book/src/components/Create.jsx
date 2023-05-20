import React, { useState } from 'react';
import { TextField, Button, Checkbox, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Create = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    place: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsChecked: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.termsChecked) {
      // Perform form submission logic here
      console.log('Form submitted');
    } else {
      console.log('Please agree to the terms and conditions');
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div >
      
      <br /><br /><br /><br /><br />
      <Box sx={{ flexGrow: 1 ,
          borderRadius: 2,
                  height: "80vh",
                  width: "65vh",
                  backgroundColor: "rgb(255, 255, 255)",
                  opacity: 11,
                  border:"3px solid black",
                  textAlign:'center',
      margin:'auto',
      }}>
      <br /><br /><br />
        <h1>Sign Up</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                name="firstName"
                type="text"
                required
                style={{ margin: 5 }}
                value={formData.firstName}
                onChange={handleChange}
              />
            
              <TextField
                label="Last Name"
                name="lastName"
                type="text"
                required
                style={{ margin: 5 }}
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                name="age"
                type="number"
                required
                style={{ margin: 5 }}
                value={formData.age}
                onChange={handleChange}
              />
      
              <TextField
                label="Place"
                name="place"
                type="place"
                required
                style={{ margin: 5 }}
                value={formData.place}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                type="address"
                required
                className="fixed-width-textfield"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="PhoneNumber"
                name="phoneNumber"
                type="number"
                required
                style={{ margin: 5 }}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                required
                style={{ margin: 5 }}
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                required
                className="fixed-width-textfield"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="ConfirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="fixed-width-textfield"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <br />
          <Checkbox
            name="termsChecked"
            checked={formData.termsChecked}
            onChange={handleChange}
            required
          >
            Agree to the terms and conditions
          </Checkbox>
          <br />
          <Button variant="contained" type="submit" style={{ margin: 5 }}>
            Sign Up
          </Button>
          <Button variant="contained" type="reset">
            Reset
          </Button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to={'/Log'} style={{ color: 'blue' }}>
            Sign In
          </Link>
        </p>
      </Box>
    </div>
  );
};

export default Create;
