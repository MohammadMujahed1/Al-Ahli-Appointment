// Sends every error in the same JSON shape (SRS section 14.2):
// { "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [...] } }
// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  let code = err.code || 'INTERNAL_ERROR';
  if (err.type === 'entity.parse.failed') code = 'INVALID_JSON';

  const unexpected = status === 500;
  if (unexpected) console.error(err);

  res.status(status).json({
    error: {
      code,
      message: unexpected ? 'Unexpected server error' : err.message,
      ...(err.details ? { details: err.details } : {}),
    },
  });
};
