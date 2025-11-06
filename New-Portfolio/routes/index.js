var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

router.get('/projects', function(req, res, next) {
  res.redirect('/#projects');  // Redirect to projects section
});

router.get('/contact', function(req, res, next) {
  res.redirect('/#contact');  // Redirect to contact section
});

module.exports = router;
