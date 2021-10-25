import log from './logger';
import startServer from './express';

export default async () => {
  log.info('Bunyan logger ready');

  const app = startServer();
  log.info('Express app ready');

  return { log, app };
};
