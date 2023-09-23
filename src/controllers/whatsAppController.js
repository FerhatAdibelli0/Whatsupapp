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
  return res.send('Message from whatsup recieved');
};

module.exports = {
  verifyToken,
  recievedMessage,
};
