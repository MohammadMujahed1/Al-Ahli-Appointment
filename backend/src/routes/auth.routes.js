const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const auth = require('../controllers/auth.controller');

const router = Router();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/me', authenticate, auth.me);

module.exports = router;
