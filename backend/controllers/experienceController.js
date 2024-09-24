const Experience = require('../models/Experience');

// Get all experiences
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add an experience
exports.addExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ error: 'Error adding experience' });
  }
};

// Update an experience
exports.updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedExperience);
  } catch (err) {
    res.status(400).json({ error: 'Error updating experience' });
  }
};

// Delete an experience
exports.deleteExperience = async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting experience' });
  }
};
