// FR-04, FR-05 (public) and FR-13, FR-14 (receptionist)
const notImplemented = require('../utils/notImplemented');

exports.listActive = notImplemented('US-04 / US-05 Browse, search and filter clinics'); // GET   /clinics
exports.getById = notImplemented('US-04 Browse clinics'); //                               GET   /clinics/:clinicId
exports.listAll = notImplemented('US-13 Add and edit clinics'); //                         GET   /admin/clinics
exports.create = notImplemented('US-13 Add and edit clinics'); //                          POST  /admin/clinics
exports.update = notImplemented('US-13 Add and edit clinics'); //                          PUT   /admin/clinics/:clinicId
exports.setStatus = notImplemented('US-14 Deactivate or reactivate a clinic'); //          PATCH /admin/clinics/:clinicId/status
