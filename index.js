const express = require('express');
const parser = require('body-parser');
const server = express();

const dispatcher = new(require('./src/domain/Dispatcher'))();

server.use(parser.json());

server.get('/', async (request, response) => {
  response.json(
      {}
  );
});

server.post('/registration', async (request, response) => {
    const hero = request.body;

    console.log({registration: hero});

    dispatcher.register(hero);

    response.send();
});

server.post('/event', async (request, response) => {
    const event = request.body;

    console.log({event: event});
    // Do something
    response.send();
});

server.get('/interventionPlan', async(request, response) => {
    console.log("Intervention plan requested");

    const plan = dispatcher.getInterventionPlan();
    console.log(plan);

    response.json(
        plan
    );
});

server.listen(process.env.PORT || 3000);
