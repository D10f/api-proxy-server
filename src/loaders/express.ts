import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from '../api';
import log from './logger';
import { ErrorService, NotFoundError } from '../services/ErrorService';

export default () => {
  const app = express();

  /**
   *  Enable app-specific options
   */
  app.use(cors());

  /**
   *  Register API routes
   */
  app.use('/api', routes.api);

  /**
   *  Register catch-all route
   */
  app.use('*', (_req: Request, _res: Response, next: NextFunction) => {
    next(new NotFoundError('Page not found'));
  });

  /**
   *  Register error handler
   */

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {

    if (err instanceof ErrorService) {
      log.info(err.message);
      return res.status(err.statusCode).json({
        code: err.statusCode,
        error: err.message
      });
    }

    log.error(err.message);

    res.status(500).json({
      code: 500,
      error: 'Internal Server Error'
    });
  });

  return app;
};
