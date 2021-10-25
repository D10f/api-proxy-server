import { Request, Response, NextFunction } from 'express';

export default (routeHandlerFn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      routeHandlerFn(req, res, next);
    } catch(err) {
      next(err);
    }
  };
};
