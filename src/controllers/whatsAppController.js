const fs = require('fs');

const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));
const verifyToken = (req, res) => {
  try {
    const accessToken = 'WEDD34343R4R545F4F45FF465G5GT';
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (token !== null && challenge !== null && token == accessToken) {
      res.send(challenge);
    }
  } catch (error) {
    res.status(400).send();
  }
  return res.send('verfiyToken success!!!!!');
};

const recievedMessage = (req, res) => {
  try {
    const entry = req.body['entry'][0];
    const changes = entry['changes'][0];
    const value = changes['value'];
    const messageObject = value['messages'];

    myConsole.log(messageObject);
    return res.send('EVENT_RECEIVED');
  } catch (error) {
    res.send('EVENT_RECEIVED');
  }
};

module.exports = {
  verifyToken,
  recievedMessage,
};
