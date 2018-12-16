const express = require('express');
const kakaoChat = require('../chat/kakao-chat');
const router = express.Router();

router.get('/keyword', kakaoChat.enterChatroom);

router.get('/message', kakaoChat.sendMessage);

router.get('/friend', kakaoChat.registPlusFriend);

router.get('/chat_room', function(req, res, next) {
  res.status(200).json({ title: 'kakao' });
});

module.exports = router;
