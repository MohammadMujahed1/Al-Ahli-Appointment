// Receptionist-only endpoints (BR-10, BR-13, NFR-05)
const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const requireRole = require('../middleware/requireRole');
const appointments = require('../controllers/appointments.controller');
const clinics = require('../controllers/clinics.controller');

const router = Router();

router.use(authenticate, requireRole('RECEPTIONIST'));

router.get('/appointments', appointments.listAll);
router.patch('/appointments/:requestNumber/confirm', appointments.confirm);
router.patch('/appointments/:requestNumber/reject', appointments.reject);

router.get('/clinics', clinics.listAll);
router.post('/clinics', clinics.create);
router.put('/clinics/:clinicId', clinics.update);
router.patch('/clinics/:clinicId/status', clinics.setStatus);

module.exports = router;
