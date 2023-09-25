const https = require('https');

function sendMessageWhatsapp(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: 'whatsapp',
    to: number,
    type: 'text',
    text: {
      body: textResponse,
    },
  });

  const options = {
    host: 'graph.facebook.com',
    path: '/v17.0/133490513178279/messages',
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer EAAMK6hncrbQBO5h1Ic0TfpAjBRZAuZC34rXh6u2ayHP2sbkDSGyeofoNp5BuyXTGKMAa2I9SJffVsYd7S11XyZAWCaTNh4xjFq84hcHMKKTKF01G1NwTPXr3ZBzaUzwHftlhhCaxISF0fp6iUZCpMEqNgZCEIpVVdsZAQhF8iaBSUmjcQ0lgquZAARZAAJ9M4Qdw4',
    },
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

module.exports = {
  sendMessageWhatsapp,
};
