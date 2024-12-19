import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    
      <Container maxwidth='lg'>
          {/* <AppBar
      position="static"
      color="inherit"
      sx={{
        borderRadius: 2, // Adjusted from 15px to 2 (MUI uses rem units by default)
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
              <Typography
        variant="h2"
        align="center"
        sx={{
          color: 'rgba(0,183,255, 1)',
        }}
      > Code Blossom Book Club!</Typography>
              <img
        src={memories}
        alt="memories"
        height="60"
        style={{ marginLeft: '15px' }}
      />
          </AppBar> */
          <AppBar
  position="static"
  color="inherit"
  sx={{
    borderRadius: 2,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row', // Keep elements side by side
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <Typography
      variant="h2"
      sx={{
        color: '#cc5577',
        fontWeight: 'bold',
        display: 'inline-block', // Ensures it aligns with the subtitle
      }}
    >
      Code Blossom Book Club!
    </Typography>
    {/* <Typography
      variant="h6"
      sx={{
        color: 'rgba(0, 0, 0, 0.7)',
        fontStyle: 'italic',
        marginTop: '-5px', // Adjusted to bring subtitle closer to the title
      }}
    >
      Discover, Discuss, and Dive into the World of Books.
    </Typography> */}
  </div>
  <img
    src={memories}
    alt="memories"
    height="200"
    style={{
      marginLeft: '10px', // Slightly reduce the margin
    }}
  />
</AppBar>

}
          <Grow in>
              <Container>
                  <Grid container  >
                      <Grid item xs={12} sm={7}>
                          <Posts setCurrentId={setCurrentId}/>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                          <Form currentId={currentId} setCurrentId={setCurrentId} />
                      </Grid>

                  
                  </Grid>

              </Container>
          </Grow>



      </Container>
  )
}

export default App;
