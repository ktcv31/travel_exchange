const express = require('express');
const { getExperiences, addExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const upload = require('../config/multer');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Get all experiences
router.get('/', [authMiddleware], getExperiences);

// Add an experience
router.post('/', addExperience);

// Update an experience
router.put('/:id', updateExperience);

// Delete an experience
router.delete('/:id', deleteExperience);

module.exports = router;

