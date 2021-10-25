export class ErrorService {
  constructor(
    public statusCode: number,
    public message: string
  ) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export class BadRequestError extends ErrorService {
  constructor(public message: string) {
    super(400, message);
  }
}
export class UnauthorizedError extends ErrorService {
  constructor(public message: string) {
    super(401, message);
  }
}
export class PaymentRequiredError extends ErrorService {
  constructor(public message: string) {
    super(402, message);
  }
}
export class ForbiddenError extends ErrorService {
  constructor(public message: string) {
    super(403, message);
  }
}
export class NotFoundError extends ErrorService {
  constructor(public message: string) {
    super(404, message);
  }
}
