// Public clinic endpoints: no login needed (Visitor, Patient)
const { Router } = require('express');
const clinics = require('../controllers/clinics.controller');

const router = Router();

router.get('/', clinics.listActive);
router.get('/:clinicId', clinics.getById);

module.exports = router;
