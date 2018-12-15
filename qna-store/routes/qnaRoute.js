var express = require('express');
var router = express.Router();

router.get('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
