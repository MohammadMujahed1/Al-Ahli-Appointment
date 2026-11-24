// Mounts every resource under /api/v1 (see docs/api-endpoints.md)
const { Router } = require('express');

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));

router.use('/auth', require('./auth.routes'));
router.use('/clinics', require('./clinics.routes'));
router.use('/appointments', require('./appointments.routes'));
router.use('/admin', require('./admin.routes'));

module.exports = router;
