const fastify = require('fastify');
const pino = require('pino');

const {
  NODE_ENV
} = process.env;

const pinoOpts = NODE_ENV === 'development' ? {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
} : undefined;

const logger = pino(pinoOpts);

async function wait(howlong) {
  return new Promise((resolve) => {
    setTimeout(() => (resolve()), howlong);
  });
}

async function start() {
  const server = await fastify({ logger });

  server.get('/', async function rootRouteHandler() {
    const randoWaitTime = (Math.floor(Math.random() * 5 + 1) * 1000);
    await wait(randoWaitTime);
    return { waited: randoWaitTime };
  });

  await server.listen(8080);
  server.log.info(`Server started with NODE_ENV=${NODE_ENV}`);
  server.log.info('Hit http://localhost:8080/ a few times.')
}

start();
