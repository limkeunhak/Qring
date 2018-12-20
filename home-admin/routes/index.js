var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/qna/questions', function(req, res, next) {
  axios.get('http://localhost:8545/qna/question')
  .then((result) => {
    res.status(200).json(result.data);
  }).catch((ex) => {
    console.log(ex);
  });
});

router.get('/qna', function(req, res, next) {
  res.render('qna');
});

module.exports = router;
