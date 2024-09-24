const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  images: [String],
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Experience = mongoose.model('Experience', ExperienceSchema);
module.exports = Experience;
