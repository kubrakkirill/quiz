const fastify = require('fastify')();
const path = require('path');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '../front/build'),
  prefix: '/'
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
  console.log(`server running at ${address}`);
});
