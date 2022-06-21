import 'dotenv/config';
import Hapi from '@hapi/hapi';
import { routes } from './routes.js';

const setupApp = async () => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`server started on port ${server.info.port}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

setupApp();
