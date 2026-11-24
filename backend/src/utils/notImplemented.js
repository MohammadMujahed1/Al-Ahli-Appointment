// Placeholder handler for endpoints planned in a later sprint.
// Each stub names the user story that will implement it (see docs/jira).
const HttpError = require('./httpError');

module.exports = function notImplemented(story) {
  return (req, res, next) =>
    next(new HttpError(501, 'NOT_IMPLEMENTED', `Planned in ${story}`));
};
