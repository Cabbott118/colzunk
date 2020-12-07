const functions = require('firebase-functions');
const app = require('express')();

const {
  loginUser,
  signUpUser,
  getUserDetails,
  uploadProfilePhoto,
} = require('./api/users');

const {
  getAllPosts,
  postOnePost,
  editPost,
  deletePost,
} = require('./api/posts');

const auth = require('./util/auth');

// User Routes
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

// Blog Post Routes
app.get('/posts', getAllPosts);
app.post('/post', postOnePost);
app.put('/post/:postId', editPost);
app.delete('/post/:postId', deletePost);

exports.api = functions.https.onRequest(app);
