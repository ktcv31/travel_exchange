const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const Router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

