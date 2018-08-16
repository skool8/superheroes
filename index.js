const express = require('express');
const server = express();

server.get('/', async (request, response) => {
  response.json(
      {}
  );
});

server.post('/registration', async (request, response) => {
    const body = request.body;
    // Do something
    response.send();
});

server.listen(process.env.PORT || 3000);
