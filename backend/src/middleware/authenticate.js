// JWT authentication middleware (NFR-04).
// Planned in Sprint 2: verify the "Authorization: Bearer <token>" header with
// jsonwebtoken, then set req.user = { userId, role }.
// Until then it FAILS CLOSED: every protected route answers 401.
const HttpError = require('../utils/httpError');

module.exports = function authenticate(req, res, next) {
  next(new HttpError(401, 'UNAUTHENTICATED', 'Authentication is not implemented yet'));
};
