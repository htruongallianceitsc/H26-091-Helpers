/** Structured API / network error, without leaking secrets through request headers. */
export class AppError extends Error {
  constructor(message, { code = 'APP_ERROR', status = null, cause, retryable = false, details } = {}) {
    super(message, { cause });
    this.name = 'AppError'; this.code = code; this.status = status; this.retryable = retryable;
    if (details !== undefined) this.details = details;
  }
  toJSON() { return { name: this.name, message: this.message, code: this.code, status: this.status, retryable: this.retryable }; }
}
