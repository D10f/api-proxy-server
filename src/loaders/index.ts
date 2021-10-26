import log from './logger';
import validator from './validator';
import startServer from './express';

export default async () => {
  log.info('Bunyan logger ready');

  log.info('AJV JSON schema validator ready.');

  const app = startServer();
  log.info('Express app ready');

  return { log, app };
};
