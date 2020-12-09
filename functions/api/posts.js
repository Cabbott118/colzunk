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
          userId: doc.data().userId,
          ownerImg: doc.data().ownerImg,
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
    userId: request.user.uid,
    ownerImg: request.user.imageUrl,
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
      response.status(500).json({ error: 'Something went wrong!' });
      console.error(err);
    });
};

exports.deletePost = (request, response) => {
  const document = db.doc(`/posts/${request.params.postId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Post not found!' });
      }
      if (doc.data().userId !== request.user.uid) {
        return response.status(403).json({
          error: "This isn't your post, GTFO!",
        });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      response.json({ message: 'Successfully deleted post!' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editPost = (request, response) => {
  if (request.body.postId || request.body.createdAt) {
    response.status(403).json({ message: 'Not allowed to edit these fields!' });
  }
  let document = db.collection('posts').doc(`${request.params.postId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: 'Updated successfully!' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};
