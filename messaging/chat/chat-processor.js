const axios = require('axios');
const _ = require('lodash');
const config = require('../config/app.config');

const processor = {};

// Enter into chatroom
processor.enter = () => {
    // TODO
};

processor.saveUser = (userKey, userPlatform) => {
    axios.post(config.MEMBER_SERVER_URL, {
        userKey: userKey,
        userPlatform: userPlatform
    }).then((result) => {
        console.log(result);
    }).catch((ex) => {
        console.log(ex);
    });
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
