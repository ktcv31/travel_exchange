const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const router = express.Router();
const {registerUser} = require('../controllers/authController')

router.post('/', registerUser);

router.get('/', async(req, res) => {
    const users = await User.find();
    return res.status(200).json({ users });
});

module.exports = router;