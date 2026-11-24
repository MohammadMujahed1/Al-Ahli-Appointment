const HttpError = require('../utils/httpError');

module.exports = function notFound(req, res, next) {
  next(new HttpError(404, 'NOT_FOUND', `No endpoint ${req.method} ${req.originalUrl}`));
};
