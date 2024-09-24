import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        )
        .then((response) => setWeather(response.data))
        .catch((error) => console.error(error));
    }
  }, [city]);

  if (!weather) return <div>Loading weather data...</div>;

  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>{Math.round(weather.main.temp - 273.15)}°C, {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;
