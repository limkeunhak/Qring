const chatProcessor = require('./chat-processor');
const config = require('../config/app.config');
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
			chatProcessor.saveUser(req.body.user_key, config.USER_PLATFORM.KAKAO);
			userState = "Q_INACTIVE";
		}
	} catch (ex) {
		console.log(ex);
	}
	// 2-1. if Q_INACTIVE, then determines whether the current message is a trigger message or not.
	// 3-1. if Q_ACTIVE, regist the message into qna server as question.
	// 4-1. if A_INACTIVE, ask whether or not to answer the question.
	// 5-1. if A_ACTIVE, regist this message into qna server as answer.
	res.status(200).json({ message: { text: "등록!" }});
    // TODO

};

kakaoChat.registUser = (req, res) => {
    console.log(req.body);
	res.status(200);
    // TODO
};

kakaoChat.deleteUser = (req, res) => {
	console.log(req.body);
	res.status(200);
	// TODO
};

kakaoChat.exitChatroom = (req, res) => {
	console.log(req.params);
	res.status(200).json({ code:0, message:"SUCCESS", comment:"정상 응답" });
	// TODO
};

module.exports = kakaoChat;
