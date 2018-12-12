var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/question", function(req, res, next) {
  res.status(200).json([{ question_id:"!!", user_id:"!@@", text:"#D", intent:"DD", date:"ddd", state:"@31"}]);
});

router.get("/answer", function(req, res, next) {
  res.status(200).json();
});

router.get("/transaction", function(req, res, next) {
  res.status(200).json();
});

router.get("/user", function(req, res, next) {
  res.status(200).json();
});

module.exports = router;
