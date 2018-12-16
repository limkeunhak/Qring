const axios = require('axios');
const config = require('../config/app.config');

const processor = {};

// Enter into chatroom
processor.enter = () => {
    // TODO
};

processor.saveUser = (userKey, userPlatform) => {
    // TODO
    axios.post(config.MEMBER_SERVER_URL, {
        userKey: userKey,
        userPlatform: userPlatform
    }).then((result) => {
        console.log(result);
    }).catch((ex) => {
        console.log(ex);
    });
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