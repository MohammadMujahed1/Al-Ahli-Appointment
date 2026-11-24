// Role guard (NFR-05). Use after authenticate:
//   router.get('/admin/appointments', authenticate, requireRole('RECEPTIONIST'), handler)
const HttpError = require('../utils/httpError');

module.exports = function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return next(new HttpError(401, 'UNAUTHENTICATED', 'Login required'));
    }
    if (!roles.includes(req.user.role)) {
      return next(new HttpError(403, 'FORBIDDEN', 'You do not have access to this resource'));
    }
    return next();
  };
};
