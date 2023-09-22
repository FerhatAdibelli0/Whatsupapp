const express = require('express');
const apiRoute = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/whatsupapp', apiRoute);

app.listen(PORT, () => {
  console.log('Server is running on port :' + PORT);
});
