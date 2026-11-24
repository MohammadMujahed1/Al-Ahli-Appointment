// Patient endpoints. GET /:requestNumber is also open to receptionists.
const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const requireRole = require('../middleware/requireRole');
const appointments = require('../controllers/appointments.controller');

const router = Router();

router.use(authenticate);

router.post('/', requireRole('PATIENT'), appointments.create);
router.get('/mine', requireRole('PATIENT'), appointments.listMine);
router.get('/:requestNumber', requireRole('PATIENT', 'RECEPTIONIST'), appointments.getByNumber);
router.patch('/:requestNumber/cancel', requireRole('PATIENT'), appointments.cancel);

module.exports = router;
