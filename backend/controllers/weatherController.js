const axios = require('axios');

exports.getWeatherByCity = async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching weather data' });
  }
};
