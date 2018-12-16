const chatProcessor = require('./chat-processor');
const config = require('../config/app.config');
const kakaoChat = {};

kakaoChat.enterChatroom = (req, res) => {
	res.status(200).json({"type":"text"});
    // TODO
};

kakaoChat.getMessageFromUser = (req, res) => {
	let commandResults = chatProcessor.processCommands(req.body.content);
	
	// Pre-defined command processing
	if (commandResults.isCommand) {
		res.status(200).json({ message: { text: commandResults.responseMessage }});
		
	// General message processing
	} else {
		chatProcessor.saveUser(req.body.user_key, config.USER_PLATFORM.KAKAO);
		res.status(200).json({ message: { text: "등록!" }});
	}

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
