import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../services/ErrorService';
import { validateParams } from '../../validators';

/**
 *  Validates the request params to conform with the Open Weather API.
 *  Additional parameters are removed from the request query object.
 */
export default (req: Request, _res: Response, next: NextFunction) => {
  const errors = validateParams(req.query);

  if (errors) {
    return next(new BadRequestError(errors.map(err => err.message!)));
  }

  next();
};
