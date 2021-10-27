export class ErrorService {
  constructor(
    public readonly statusCode: number,
    public readonly message: string | string[]
  ) {}
}

export class BadRequestError extends ErrorService {
  constructor(message: string | string[]) {
    super(400, message);
  }
}

export class UnauthorizedError extends ErrorService {
  constructor(message: string | string[]) {
    super(401, message);
  }
}

export class PaymentRequiredError extends ErrorService {
  constructor(message: string | string[]) {
    super(402, message);
  }
}

export class ForbiddenError extends ErrorService {
  constructor(message: string | string[]) {
    super(403, message);
  }
}

export class NotFoundError extends ErrorService {
  constructor(message: string | string[]) {
    super(404, message);
  }
}

export class RequestTimeoutError extends ErrorService {
  constructor(message: string | string[]) {
    super(408, message);
  }
}

export class TooManyRequestsError extends ErrorService {
  constructor(message: string | string[]) {
    super(429, message);
  }
}

/**
 *  General purpose error-matching function that returns the appropriate type
 *  of error if available. Useful for external services like API responses that
 *  may return multiple errors
 */
export default (code: string | number, message: string) => {
  switch (+code) {
    case 400: return new BadRequestError(message);
    case 401: return new UnauthorizedError(message);
    case 402: return new PaymentRequiredError(message);
    case 403: return new ForbiddenError(message);
    case 404: return new NotFoundError(message);
    case 408: return new RequestTimeoutError(message);
    case 429: return new TooManyRequestsError(message);
    default:  return new Error(message);
  }
};
