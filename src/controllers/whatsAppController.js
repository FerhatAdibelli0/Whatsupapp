const verifyToken = (req, res) => {
  return res.send('verfiyToken success');
};

const recievedMessage = (req, res) => {
  return res.send('Message from whatsup recieved');
};

module.exports = {
  verifyToken,
  recievedMessage,
};
