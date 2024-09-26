const express = require('express');
const axios = require('axios');

const router = express.Router();


const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


router.get('/weather/:location', async (req, res) => {
  const location = req.params.location;

  try {

    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: location,
        appid: WEATHER_API_KEY,
        units: 'metric' 
      }
    });


    res.json(weatherResponse.data);
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).send('Failed to fetch weather data.');
  }
});

module.exports = router;
