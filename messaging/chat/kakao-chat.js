const chatProcessor = require('./chat-processor');
const config = require('../config/app.config');
const axios = require('axios');
const kakaoChat = {};

kakaoChat.enterChatroom = (req, res) => {
	res.status(200).json({ "type": "text" });
};

kakaoChat.getMessageFromUser = async (req, res) => {
	console.log(req.body.user_key);
	let commandResults = chatProcessor.processCommands(req.body.content);
	
	/* Pre-defined command processing */
	if (commandResults.isCommand) {
		res.status(200).json({ message: { text: commandResults.responseMessage }});
		return;	
	}

	/* General message processing */
	// Message handling process
	// 1. Get user state (if member server don't have current user infomation, save that and return Q_INACTIVE)
	let userState = null;
	try {
		userState = (await chatProcessor.getUserStateInPromise(req.body.user_key)).data;
		if (!userState || userState.length == 0) {
			chatProcessor.saveUser(req.body.user_key, config.USER_PLATFORM.KAKAO, (responseMessage) => {	
				res.status(200).json({ message: { text: responseMessage }});
			});
		} else {
			userState = userState[0].state;
			if (userState == config.USER_STATES.Q_ACTIVE) {
				axios.post({ url: 'https://api.line.me/v2/bot/message/push', data: {
					"to":"U4dbbc044e1c125e8d45516828b12bb42",
					"messages":[{"type":"text", "text": message.text }]
				}, 
				headers: {
					'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
					'Content-Type': 'application/json'
				}
				}).then((result) => {
					console.log(result);
				}).catch( ex => {
					console.log(ex);
				});
			}
			chatProcessor.respondMessage(req.body.user_key, userState, req.body.content, (responseMessage) => {
				res.status(200).json({ message: { text: responseMessage }});
			});
		}
	} catch (ex) {
		console.log(ex);
	}
};

kakaoChat.registUser = (req, res) => {
    console.log(req.body);
	res.status(200).json({ code:0, message:"SUCCESS", comment:"정상 응답" });
    // TODO
};

kakaoChat.deleteUser = (req, res) => {
	console.log(req.body);
	res.status(200).json({ code:0, message:"SUCCESS", comment:"정상 응답" });
	// TODO
};

kakaoChat.exitChatroom = (req, res) => {
	chatProcessor.deleteUser(req.params.userKey);
	res.status(200).json({ code:0, message:"SUCCESS", comment:"정상 응답" });
	// TODO
};

module.exports = kakaoChat;
