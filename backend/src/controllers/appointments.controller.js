// FR-06 to FR-09 (patient) and FR-10 to FR-12 (receptionist)
const notImplemented = require('../utils/notImplemented');

// Patient
exports.create = notImplemented('US-06 Submit an appointment request'); // POST  /appointments
exports.listMine = notImplemented('US-07 View my requests'); //            GET   /appointments/mine
exports.getByNumber = notImplemented('US-08 Track a request by number'); // GET   /appointments/:requestNumber
exports.cancel = notImplemented('US-09 Cancel a request'); //              PATCH /appointments/:requestNumber/cancel

// Receptionist
exports.listAll = notImplemented('US-10 Review appointment requests'); //  GET   /admin/appointments
exports.confirm = notImplemented('US-11 Confirm a request'); //            PATCH /admin/appointments/:requestNumber/confirm
exports.reject = notImplemented('US-12 Reject a request'); //              PATCH /admin/appointments/:requestNumber/reject
