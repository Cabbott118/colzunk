const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
app.use(cors());

const {
  loginUser,
  signUpUser,
  getUserDetails,
  updateUserDetails,
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
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

// Blog Post Routes
app.get('/posts', getAllPosts);
app.post('/post', auth, postOnePost);
app.put('/post/:postId', auth, editPost);
app.delete('/post/:postId', auth, deletePost);

exports.api = functions.https.onRequest(app);
