// An error that carries an HTTP status and a machine-readable code.
// The error handler turns it into: { "error": { "code", "message", "details" } }
class HttpError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

module.exports = HttpError;
