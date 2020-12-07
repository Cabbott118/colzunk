const functions = require('firebase-functions');
const app = require('express')();

const { getAllPosts, postOnePost } = require('./api/posts');

app.get('/posts', getAllPosts);
app.post('/post', postOnePost);
exports.api = functions.https.onRequest(app);
