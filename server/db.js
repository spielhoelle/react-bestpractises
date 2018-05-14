require('dotenv').config()

module.exports = {
  'url' : process.env.MONGOURL || 'mongodb://localhost/posts'
}

