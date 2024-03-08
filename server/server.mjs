//const fastify = require('fastify')();
import fasti from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import { WebSocketServer } from 'ws';
import path from 'path'
import { fileURLToPath } from 'url'

const fastify = fasti()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(fastifyStatic, {
  root: join(__dirname, '../front/build'),
  prefix: '/'
});

const ws = new WebSocketServer({server: fastify.server});

ws.on('open', function open() {
  console.log('WebSocket connection established');

  ws.send('Hello from the client!');
});

ws.on('message', function incoming(data) {
  console.log('Received message from server:', data);

  ws.close();
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
});

fastify.get('/', async (request, reply) => {
  try {
    return reply.sendFile('index.html');
  } catch (e) {
    console.log(e);
  }
});

fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
