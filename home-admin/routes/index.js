var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/qna', function(req, res, next) {
  res.render('qna');
});

module.exports = router;
