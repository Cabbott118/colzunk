const { db } = require('../util/admin');

exports.getAllPosts = (request, response) => {
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          createdAt: doc.data().createdAt,
        });
      });
      return response.json(posts);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOnePost = (request, response) => {
  if (request.body.title.trim() === '') {
    return response.status(400).json({ title: 'Title cannot be empty!' });
  }

  if (request.body.body.trim() === '') {
    return response.status(400).json({ body: 'Body cannot be empty!' });
  }

  const newPostItem = {
    title: request.body.title,
    body: request.body.body,
    createdAt: new Date().toISOString(),
  };
  db.collection('posts')
    .add(newPostItem)
    .then((doc) => {
      const responsePostItem = newPostItem;
      responsePostItem.id = doc.id;
      return response.json(responsePostItem);
    })
    .catch((err) => {
      response.status(500).json({ error: 'Something went wrong' });
      console.error(err);
    });
};
