const chatProcessor = require('./chat-processor');
const kakaoChat = {};

kakaoChat.enterChatroom = (req, res) => {
	res.status(200).json({"type":"text"});
    // TODO
};

kakaoChat.getMessageFromUser = (req, res) => {
    console.log(req.body);
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
