const express = require('express');
const { getWeatherByCity } = require('../controllers/weatherController');
const { getMapByLocation } = require('../controllers/mapsController');

const router = express.Router();

// Weather route
router.get('/weather', getWeatherByCity);

// Maps route
router.get('/map', getMapByLocation);

module.exports = router;
