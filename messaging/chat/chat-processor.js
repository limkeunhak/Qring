const axios = require('axios');
const _ = require('lodash');
const config = require('../config/app.config');

const processor = {};

// Enter into chatroom
processor.enter = () => {
    // TODO
};

processor.saveUser = (userKey, userPlatform, callback) => {
    axios.post(config.MEMBER_SERVER_URL, {
        userKey: userKey,
        userPlatform: userPlatform
    }).then((result) => {
		callback(config.QANY_MSG_CONSTANTS.JOIN_TO_QINACTIVE);
    }).catch((ex) => {
        console.log(ex);
    });
};

processor.deleteUser = (userKey) => {
    axios.delete(config.MEMBER_SERVER_URL, {
		data: { userKey: userKey }
    }).then((result) => {
        console.log(result);
    }).catch((ex) => {
        console.log(ex);
    });
};

processor.getUserStateInPromise = (userKey) => {
	return axios.get(config.MEMBER_SERVER_URL + "/state?userKey=" + userKey);
};

processor.processCommands = (command) => {
	let existingCommands = _.values(config.QANY_MSG_CONSTANTS.GLOBAL_COMMAND_LIST);
	let index = _.findIndex(existingCommands, function(o) { return o.COMMAND == command });

	if (index == -1) {
		return { isCommand: false, responseMessage: '' };
	} else {
		return { isCommand: true, responseMessage: existingCommands[index].RESPONSE };
	}

};

processor.respondMessage = async (userKey, state, content, callback) => {
	let currentState = state;

	// 2-1. if Q_INACTIVE, then determines whether the current message is a trigger message or not.
	// 3-1. if Q_ACTIVE, regist the message into qna server as question.
	// 4-1. if A_INACTIVE, ask whether or not to answer the question.
	// 5-1. if A_ACTIVE, regist this message into qna server as answer.

	let resMsg = null;
	if (currentState == config.USER_STATES.Q_INACTIVE) {
		if (content == "질문하고싶어") {	// TODO: Apply Dialogflow
			await updateUser(userKey, config.USER_STATES.Q_ACTIVE);
			resMsg = getMessage(config.QANY_MSG_CONSTANTS.QINACTIVE_TO_QACTIVE);
		} else {
			resMsg = getMessage(config.QANY_MSG_CONSTANTS.QINACTIVE_TO_QINACTIVE);
		}
	} else if (currentState ==  config.USER_STATES.Q_ACTIVE) {
		await updateUser(userKey, config.USER_STATES.Q_INACTIVE);
		// TODO: regist question
		resMsg = getMessage(config.QANY_MSG_CONSTANTS.QACTIVE_TO_QINACTIVE);
	} else if (currentState == config.USER_STATES.A_INACTIVE) {
		if (content == "알려줄께") {		// TODO: Apply Dialogflow
			await updateUser(userKey, config.USER_STATES.A_ACTIVE);
			resMsg = getMessage(config.QANY_MSG_CONSTANTS.AINACTIVE_TO_QINACTIVE);
		} else {
			await updateUser(userKey, config.USER_STATES.Q_INACTIVE);
			resMsg = getMessage(config.QANY_MSG_CONSTANTS.AINACTIVE_TO_AACTIVE);
		}
	} else if (currentState == config.USER_STATES.A_ACTIVE) {
		await updateUser(userKey, config.USER_STATES.Q_INACTIVE);
		// TODO: regist answer
		resMsg = getMessage(config.QANY_MSG_CONSTANTS.AACTIVE_TO_QINACTIVE);
	}

	callback(resMsg);
}

processor.saveQuestion = () => {
    // TODO
};

processor.saveAnswer = () => {
    // TODO
};

processor.exit = () => {
    // TODO
};

module.exports = processor;

function getMessage(messagePool) {
	return messagePool[Math.floor(Math.random() * messagePool.length)];
}

function updateUser(userKey, state) {
	return axios.put(config.MEMBER_SERVER_URL, { userKey: userKey, state: state });
}
