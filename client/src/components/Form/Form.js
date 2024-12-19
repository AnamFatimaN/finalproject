import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
//     <Paper
//     sx={{
//       padding: 2,
//     }}
//   >
//     <form
//       autoComplete="off"
//       noValidate
//       onSubmit={handleSubmit}
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//       }}
//     >
//       <Typography variant="h6">
//         {currentId ? `Editing "${post?.title}"` : 'Creating a Memory'}
//       </Typography>
//       <TextField
//         name="creator"
//         variant="outlined"
//         label="Creator"
//         fullWidth
//         value={postData.creator}
//         onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
//         sx={{ margin: 1 }}
//       />
//       <TextField
//         name="title"
//         variant="outlined"
//         label="Title"
//         fullWidth
//         value={postData.title}
//         onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//         sx={{ margin: 1 }}
//       />
//       <TextField
//         name="message"
//         variant="outlined"
//         label="Message"
//         fullWidth
//         multiline
//         rows={4}
//         value={postData.message}
//         onChange={(e) => setPostData({ ...postData, message: e.target.value })}
//         sx={{ margin: 1 }}
//       />
//       <TextField
//         name="tags"
//         variant="outlined"
//         label="Tags (comma separated)"
//         fullWidth
//         value={postData.tags}
//         onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
//         sx={{ margin: 1 }}
//       />
//       <div
//         style={{
//           width: '97%',
//           margin: '10px 0',
//         }}
//       >
//         <FileBase
//           type="file"
//           multiple={false}
//           onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
//         />
//       </div>
//       <Button
//         variant="contained"
//         color="primary"
//         size="large"
//         type="submit"
//         fullWidth
//         sx={{ marginBottom: 1 }}
//       >
//         Submit
//       </Button>
//       <Button
//         variant="contained"
//         color="secondary"
//         size="small"
//         onClick={clear}
//         fullWidth
//       >
//         Clear
//       </Button>
//     </form>
//   </Paper>
// );
// };
<Paper
  sx={{
    padding: 2,
    backgroundColor: '#f9f5f1', // Subtle off-white, book-page feel
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    borderRadius: 3, // Slightly rounded edges for a friendly look
  }}
>
  <form
    autoComplete="off"
    noValidate
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontFamily: "'Merriweather', serif", // Classic book-style font
        color: '#3e2723', // Warm dark brown for text
        marginBottom: 2,
      }}
    >
      {currentId ? `Editing "${post?.title}"` : 'Share Your Favorite Book'}
    </Typography>
    <TextField
      name="creator"
      variant="outlined"
      label="Your Name"
      fullWidth
      value={postData.creator}
      onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
      sx={{
        margin: 1,
        backgroundColor: '#fffaf3', // Light background for inputs
        borderRadius: 1,
      }}
    />
    <TextField
      name="title"
      variant="outlined"
      label="Book Title"
      fullWidth
      value={postData.title}
      onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      sx={{
        margin: 1,
        backgroundColor: '#fffaf3',
        borderRadius: 1,
      }}
    />
    <TextField
      name="message"
      variant="outlined"
      label="Why Do You Love It?"
      fullWidth
      multiline
      rows={4}
      value={postData.message}
      onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      sx={{
        margin: 1,
        backgroundColor: '#fffaf3',
        borderRadius: 1,
      }}
    />
    <TextField
      name="tags"
      variant="outlined"
      label="Tags (comma separated)"
      fullWidth
      value={postData.tags}
      onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
      sx={{
        margin: 1,
        backgroundColor: '#fffaf3',
        borderRadius: 1,
      }}
    />
    <div
      style={{
        width: '97%',
        margin: '10px 0',
      }}
    >
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      />
    </div>
    <Button
      variant="contained"
      size="large"
      type="submit"
      fullWidth
      sx={{
        backgroundColor: '#6d4c41', // Warm brown for submit button
        color: '#fff',
        marginBottom: 1,
        '&:hover': {
          backgroundColor: '#5d4037', // Slightly darker shade on hover
        },
      }}
    >
      Submit
    </Button>
    <Button
      variant="contained"
      size="small"
      onClick={clear}
      fullWidth
      sx={{
        backgroundColor: '#d7ccc8', // Soft neutral for clear button
        color: '#3e2723',
        '&:hover': {
          backgroundColor: '#bcaaa4', // Slightly darker neutral shade
        },
      }}
    >
      Clear
    </Button>
  </form>
</Paper>
  )
}


export default Form;
