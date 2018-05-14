# Superblog API

[![Greenkeeper badge](https://badges.greenkeeper.io/spielhoelle/superblog.svg)](https://greenkeeper.io/)

This is a little node server with CRUD interface:


# Installation
Install npm stuff `npm i`

Create a copy of env file: `cp .env.example .env`  and set your credentials. Eg:
```
PORT=5000
MONGOURL=mongodb://localhost/superblog
```
# Start development server

`npm run dev`

# Start production server

`node server/server.js`


# Routes
- GET `/api/posts` all posts
- POST `/api/posts` creates a post. The request body must contain the post itself. See model
- DELETE `/api/posts:id` deletes a post by given id eg: `/api/posts/5ad4ce741a411bc2cb787445`
- PUT `/api/posts:id` updates a post by given id
  eg: `/api/posts/5ad4ce741a411bc2cb787445`

# Model
```javascript
{
    name: String,
    content: String,
    order: Number
}
```

# TODO's

1. create a own theme and pass it around with props or the context
2. when selecting a image in CreatePost, show a preview of the image
3. read about refs `src/App.js:23`
3. fix PropTypes checking `src/Post.jsx:43`
4. search whole project for `TODO`
