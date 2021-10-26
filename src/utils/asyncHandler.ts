import { Request, Response, NextFunction } from 'express';

export default (routeHandlerFn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routeHandlerFn(req, res, next);
    } catch(err) {
      next(err);
    }
  };
};
