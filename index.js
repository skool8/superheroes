const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());

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

server.get('/interventionPlan', async(request, response) => {
    console.log("Intervention plan requested");

    response.json(
        []
    );
});

server.listen(process.env.PORT || 3000);
