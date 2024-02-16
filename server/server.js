const fastify = require('fastify')();
const path = require('path');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '../front/build'),
  prefix: '/'
});

 //fastify.register(require('fastify-ws'));

fastify.get('/', async (request, reply) => {
  try {
    return reply.sendFile('index.html');
  } catch (e) {
    console.log(e);
  }
});

// fastify.ready(err => {
//   if (err) throw err;

//   fastify.ws.on('connection', socket => {
//     console.log('Client connected');

//     socket.on('message', message => {
//       console.log('Received message:', message);
//     });

//     const interval = setInterval(() => {
//       socket.send('Hello from the server!');
//     }, 1000);

//     socket.on('close', () => {
//       clearInterval(interval);
//       console.log('Client disconnected');
//     });
//   });
// });

fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
