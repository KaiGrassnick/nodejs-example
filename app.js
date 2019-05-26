'use strict';

const express = require('express');
const service = require('./service');

const httpPort = 80;
const banner   = 'This is a simple NodeJS Express app :)\nMade with ♥\n';

const app = express();

app.get('/', (request, response) => response.set('content-type', 'text/plain; charset=utf-8').send(banner));

app.get('/service', service.handle);

app.listen(httpPort, () => console.log(`Service is listening on port ${httpPort}`));
