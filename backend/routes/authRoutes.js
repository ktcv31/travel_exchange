const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const router = express.Router();
const {loginUser} = require('../controllers/authController')

router.post('/login', loginUser);

module.exports = router;
