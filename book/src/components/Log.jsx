import React, { useState } from 'react';
import { TextField, Button, Container, Box} from '@mui/material';
import { Link } from 'react-router-dom';

const Log = () => {


  return (
   
  
    // <div className="login-container" >
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100%", alignContent:'center' , marginTop:"22vh"}}>

          
          
        <Box sx={{
            borderRadius: 2,
            height: "55vh",
            width: "50vh",
            backgroundColor: "rgb(255, 255, 255)",
            opacity: 11,
            border:"3px solid black",
            textAlign:'center'


          }}>
      <br /><br /><br /><br /><br />
      <h1>SIGN IN</h1>
      <TextField
        label="Email"
        type="email"
        required
      />
      <br /><br />
      <TextField
        label="Password"
        type="password"
        required
      />
      <br /><br />
      <Button variant="contained" type="submit" >
        Sign In
      </Button>
      <p>Don't have an account? <Link to={"/Create"} style={{color : "blue"}}>Sign Up</Link></p>
      </Box>
    </div>

 
  );
};

export default Log;
