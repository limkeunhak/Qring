const express = require('express');
const kakaoChat = require('../chat/kakao-chat');
const router = express.Router();

router.get('/keyword', function(req, res, next) {
  res.status(200).json({ type: 'text' });
});

router.get('/message', function(req, res, next) {
  res.status(200).json({ title: 'kakao' });
});

router.get('/friend', function(req, res, next) {
  res.status(200).json({ title: 'kakao' });
});

router.get('/chat_room', function(req, res, next) {
  res.status(200).json({ title: 'kakao' });
});

module.exports = router;
