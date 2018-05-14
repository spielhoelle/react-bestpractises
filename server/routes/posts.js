const Post = require('../models/post');

module.exports = function(router){

  router.route('/posts')

  // create a post (accessed at POST http://localhost:8080/api/posts)
    .post(function(req, res) {
      var post = new Post();      // create a new instance of the post model
      post.name = req.body.name;  // set the posts name (comes from the request)
      post.content = req.body.content;  // set the posts name (comes from the request)
      post.order = req.body.order;  // set the posts name (comes from the

      // save the post and check for errors
      post.save(function(err) {
        if (err)
          res.send(err);
        console.log("Post created:", post);
        res.json({ message: 'post created!', post: post });
      });

    })

  // get all the posts (accessed at GET http://localhost:8080/api/posts)
    .get(function(req, res) {
      Post.find(function(err, posts) {
        if (err)
          res.send(err);

        res.json(posts);
      });
    });
  router.route('/posts/:post_id')

  // get the post with that id (accessed at GET http://localhost:8080/api/posts/:post_id)
    .get(function(req, res) {
      Post.findById(req.params.post_id, function(err, post) {
        if (err)
          res.send(err);
        console.log("Posts fetched:", posts);
        res.json(post);
      });
    })

  // update the post with this id (accessed at PUT http://localhost:8080/api/posts/:post_id)
    .put(function(req, res) {

      // use our post model to find the post we want
      Post.findById(req.params.post_id, function(err, post) {

        if (err)
          res.send(err);

        post.name = req.body.name;  // update the posts info
        post.content = req.body.content;  // update the posts info
        post.order = req.body.order;  // update the posts info

        // save the post
        post.save(function(err) {
          if (err)
            res.send(err);

          console.log("Post updated:", post);
          res.json({ message: 'post updated!' });
        });

      });
    })
  // delete the post with this id (accessed at DELETE http://localhost:8080/api/posts/:post_id)
    .delete(function(req, res) {
      Post.remove({
        _id: req.params.post_id
      }, function(err, post) {
        if (err)
          res.send(err);

        console.log("Post deleted")
        res.json({ message: 'Successfully deleted' });
      });
    });
  return router;
}
