const express = require('express');
const kakaoChat = require('../chat/kakao-chat');
const router = express.Router();

router.get('/keyboard', kakaoChat.enterChatroom);
router.post('/message', kakaoChat.getMessageFromUser);
router.post('/friend', kakaoChat.registUser);
router.delete('/friend/:userKey', kakaoChat.deleteUser);
router.delete('/chat_room/:userKey', kakaoChat.exitChatroom);

module.exports = router;
