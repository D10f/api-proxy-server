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
