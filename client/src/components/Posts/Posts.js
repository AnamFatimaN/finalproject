import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems="stretch"
      spacing={3}
      sx={{
        display: 'flex',
        alignItems: 'center', // Aligning items as per `mainContainer`
      }}
    >
      {posts.map((post) => (
        <Grid
          key={post._id}
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            margin: (theme) => theme.spacing(1), // Replacing `smMargin`
          }}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
      <div
        style={{
          textAlign: 'center', // Replacing `actionDiv`
        }}
      >
        {/* Add any additional actions here */}
      </div>
    </Grid>
  );
};

export default Posts;
