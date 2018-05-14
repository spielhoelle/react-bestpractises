var path    = require("path");
module.exports = function(router){
  // middleware to use for all requests
  router.use(function(req, res, next) {
    next();
  });

  router.get('/', function(req, res) {
    console.log("Render index");
    res.render('index');
  });

  return router;
}
