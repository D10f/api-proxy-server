import { Request, Response } from 'express';
import loaders from './loaders';
import config from './config';

async function startServer() {
  /**
  * Initializes services and libraries
  */

  const { log, app } = await loaders();

  /**
  *  Register healthcheck route
  */

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).send('OK');
  });

  /**
  * Start listening for connections
  */

  const server = app.listen(+config.PORT, config.HOST, () => {
    log.info(`Listening on: ${config.HOST}:${config.PORT}`);
  });

  /**
  *  Initialize signal listeners for graceful shutdown
  */

  process.on("SIGINT", () => {
    log.warn(
      "SIGINT received, shutting down...",
      new Date().toISOString()
    );
    shutdown();
  });

  process.on("SIGTERM", () => {
    log.warn(
      "SIGTERM received, shutting down...",
      new Date().toISOString()
    );
    shutdown();
  });

  function shutdown() {
    log.info('Shutting down server...');
    server.close(async (err: Error | undefined) => {

      if (err) {
        log.error(err);
        process.exitCode = 1;
      }

      log.info(`Server shutdown [${process.exitCode}]`)
      process.exit();
    });
  };
}

startServer();
