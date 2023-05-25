import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, CardMedia } from '@mui/material';

const AdminView = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBooksRented, setTotalBooksRented] = useState(0);
  const [totalBooksReturned, setTotalBooksReturned] = useState(0);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [editBookTitle, setEditBookTitle] = useState('');

  // Function to handle adding a new book
  const handleAddBook = () => {
    // Add your logic here to handle adding a new book
    // You can update the totalBooksRented and totalBooksReturned states accordingly
    // You can use the newBookTitle state to get the new book title from a text field
    // Example: setTotalBooksRented(totalBooksRented + 1);
  };

  // Function to handle editing book information
  const handleEditBook = () => {
    // Add your logic here to handle editing book information
    // You can use the editBookTitle state to get the new book title from a text field
  };

  return (
    <div>
      <Card>
        <CardMedia component="img" height="140" image="https://www.urantia.org/sites/default/files/images/gallery/1999-the-urantia-book-leather-burgundy.png" alt="Card 1 Image" />
        <CardContent>
          <Typography variant="h5" component="div">
            Card 1 - Total Number of Users
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Total Users: {totalUsers}
          </Typography>
          {/* Display additional user information */}
        </CardContent>
      </Card>

      <Card>
        <CardMedia component="img" height="140" image="https://i.pinimg.com/736x/00/b6/b5/00b6b5e87725e8c83c43a0eb8b4c3266--stamp-book-classic-books.jpg" alt="Card 2 Image" />
        <CardContent>
          <Typography variant="h5" component="div">
            Card 2 - Total Number of Books Rented
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Total Books Rented: {totalBooksRented}
          </Typography>
          {/* Display additional rented book details */}
        </CardContent>
      </Card>

      <Card>
        <CardMedia component="img" height="140" image="https://i.pinimg.com/236x/d5/38/58/d538581ea7a080c6fc6e16f60e26f9d7.jpg" alt="Card 3 Image" />
        <CardContent>
          <Typography variant="h5" component="div">
            Card 3 - Total Number of Books Returned
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Total Books Returned: {totalBooksReturned}
          </Typography>
          {/* Display additional returned book details */}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Add New Book
          </Typography>
          <TextField
            label="Book Title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddBook}>
            Add Book
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Edit Book Information
          </Typography>
          <TextField
            label="New Book Title"
            value={editBookTitle}
            onChange={(e) => setEditBookTitle(e.target.value)}
          />
          <Button variant="contained" onClick={handleEditBook}>
            Edit Book
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminView;
