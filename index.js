// index.js

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();

app.use(bodyParser.json());

// GET route to return "pong" when hitting the /ping endpoint
app.get('/ping', (req, res) => {
  res.send('pong');
});

// POST route to return "pong" when sending a JSON body with a "ping" property
app.post('/ping', (req, res) => {
  const { ping } = req.body;
  if (ping === 'ping') {
    res.send('pong');
  } else {
    res.status(400).send('Bad Request');
  }
});

// Access environment variables
const customParam = process.env.CUSTOM_PARAM;
const port = process.env.PORT || 3000; // Use provided port or default to 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Custom Parameter: ${customParam}`);
});
