const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://akashchemj:acj123@cluster0.rpgctdk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema for the admin collection
const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Perform admin login authentication logic here
  // For example:
  Admin.findOne({ email, password }, (err, admin) => {
    if (err) {
      console.log('Error occurred during login:', err);
      res.status(500).json({ error: 'An error occurred during login' });
    } else if (!admin) {
      console.log('Admin login failed');
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      console.log('Admin login successful');
      res.status(200).json({ message: 'Login successful' });
      // Redirect or perform any actions for successful login
    }
  });
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
