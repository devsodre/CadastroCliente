const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
  return res.json({ message: 'Hello Bootcamp' })
});



server.listen(3000);