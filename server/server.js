const fastify = require('fastify')();


fastify.get('/', async (request, reply) => {
  try {
    return {message : "hello, world!"}
  }
  catch (e) { console.log(e) }
});


fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
})