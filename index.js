const express = require('express');
const server = express();

server.get('/', async (request, response) => {
  response.json(
      {}
  );
});

server.listen(process.env.PORT || 3000);
