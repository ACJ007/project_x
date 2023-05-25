import React, { useState } from 'react';
import { Card as MuiCard, CardMedia, CardContent, Typography, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { Send as SendIcon, Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

const BookCard = ({ name, picture, isRented, isLiked, comments, onRead, onRent, onReturn, onLike, onComment }) => {
  const [commentInput, setCommentInput] = useState('');

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    onComment(commentInput);
    setCommentInput('');
  };

  return (
    <MuiCard sx={{ width: 210, height:'fit-content' }}>
      <CardMedia component="img" height="300"  image={picture} alt={name} />
      <CardContent sx={{  }} >
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        {!isRented ? (
          <Button variant="text" onClick={onRent}>
            Rent
          </Button>
        ) : (
          <Button variant="text" onClick={onReturn}>
            Return
          </Button>
        )}
        <IconButton color={isLiked ? 'secondary' : 'primary'} onClick={onLike}>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="h6" component="div">
          Comments:
        </Typography>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <TextField
          label="Add a comment"
          value={commentInput}
          onChange={handleCommentChange}
          InputProps={{
            endAdornment:(
              <InputAdornment position='end' >
                  <IconButton color="primary" onClick={handleCommentSubmit}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        
      </CardContent>
    </MuiCard>
  );
};

export default BookCard;
