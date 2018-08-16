const express = require('express');
const server = express();

server.get('/', async (request, response) => {
  response.json(
      {}
  );
});

server.post('/registration', async (request, response) => {
    const body = request.body;

    console.log({registration: body});
    // Do something
    response.send();
});

server.post('/event', async (request, response) => {
    const body = request.body;

    console.log({event: body});
    // Do something
    response.send();
});

server.listen(process.env.PORT || 3000);
