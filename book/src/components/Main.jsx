import React, { useState } from 'react';
import BookCard from './BookCard';
import { Box } from '@mui/material';

const Main = () => {
  const [books, setBooks] = useState([
    { id: 1, name: 'One Piece', picture: 'https://i.pinimg.com/originals/81/cd/cb/81cdcbaa402d7ccfecadeb7b80089ef9.jpg', isRented: false, isLiked: false, comments: [] },
    { id: 2, name: 'Death Note', picture: 'https://m.media-amazon.com/images/I/716ASj7z2GL._SY741_.jpg', isRented: false, isLiked: false, comments: [] },
    { id: 3, name: 'One Punch Man', picture: 'https://www.themoviedb.org/t/p/original/8yWUcg4KNmXCkrZIx2CA9O9LCuf.jpg', isRented: false, isLiked: false, comments: [] },

    // Add more book objects here
  ]);

 

  const handleRent = (id) => {
    // Perform action when a book is rented
    setBooks(prevBooks => {
      return prevBooks.map(book => {
        if (book.id === id) {
          return { ...book, isRented: true };
        }
        return book;
      });
    });
  };

  const handleReturn = (id) => {
    // Perform action when a book is returned
    setBooks(prevBooks => {
      return prevBooks.map(book => {
        if (book.id === id) {
          return { ...book, isRented: false };
        }
        return book;
      });
    });
  };

  const handleLike = (id) => {
    // Perform action when a book is liked
    setBooks(prevBooks => {
      return prevBooks.map(book => {
        if (book.id === id) {
          return { ...book, isLiked: !book.isLiked };
        }
        return book;
      });
    });
  };

  const handleComment = (id, comment) => {
    // Perform action when a comment is submitted
    setBooks(prevBooks => {
      return prevBooks.map(book => {
        if (book.id === id) {
          return { ...book, comments: [...book.comments, comment] };
        }
        return book;
      });
    });
  };

  return (
    <div>
        <br/><br/><br/><br/><br/><br/>
      {/* <h1>Book Collection</h1> */}
      <div className="book-list">
      <Box sx={{ marginLeft:'8%',
      display:'-ms-flexbox'
      }}/>
        {books.map(book => (
          <BookCard
            key={book.id}
            name={book.name}
            picture={book.picture}
            isRented={book.isRented}
            isLiked={book.isLiked}
            comments={book.comments}
            onRent={() => handleRent(book.id)}
            onReturn={() => handleReturn(book.id)}
            onLike={() => handleLike(book.id)}
            onComment={(comment) => handleComment(book.id, comment)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
