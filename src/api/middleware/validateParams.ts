import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../services/ErrorService';
import { validateParams } from '../../validators';

/**
 *  Validates the params receives to conform with the Open Weather API service.
 *  Non-standard parameters are removed from the request query object.
 */
export default (req: Request, _res: Response, next: NextFunction) => {
  const isValid = validateParams(req.query);

  if (!isValid) {
    return next(
      new BadRequestError('Invalid query parameters provided')
    );
  }

  console.log(req.query);

  next();
};
