const fs = require('fs');
const whatsappService = require('../services/whatsappService');

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

    if (typeof messageObject !== 'undefined') {
      const message = messageObject[0];
      const text = getTextUser(message);
      const number = message['from'];
      // whatsappService.sendMessageWhatsapp(
      //   'Otomatik gelen mesaj :' + text,
      //   number
      // );
      myConsole.log(message);
      console.log(text);
    }
    return res.send('EVENT_RECEIVED');
  } catch (error) {
    res.send('EVENT_RECEIVED');
  }
};

const getTextUser = (messages) => {
  let text = '';
  const messageType = messages['type'];
  if (messageType === 'text') {
    text = messages['text']['body'];
  } else if (messageType === 'interactive') {
    const interactiveObject = messages['interactive'];
    const typeInteractive = messages['type'];
    if (typeInteractive === 'button_reply') {
      text = interactiveObject['button_reply']['title'];
    } else if (typeInteractive === 'list_reply') {
      text = interactiveObject['list_reply']['title'];
    } else {
      console.log('Error interactive message');
    }
  } else {
    console.log('Error interactive message');
  }
  return text;
};

module.exports = {
  verifyToken,
  recievedMessage,
};
