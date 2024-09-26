import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapSearch = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const mapRef = useRef(null); 
  const map = useRef(null); 

  
  useEffect(() => {
    if (!map.current) {
      map.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      });
    }
  }, []);

  const handleSearch = async () => {
    try {
      
      const weatherResponse = await axios.get(`/api/weather/${location}`);
      setWeather(weatherResponse.data);

     
      const geoResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: location,
            key: GOOGLE_MAPS_API_KEY,
          },
        }
      );

      if (geoResponse.data.results.length > 0) {
        const { lat, lng } = geoResponse.data.results[0].geometry.location;
     
        map.current.setCenter({ lat, lng });
        map.current.setZoom(10);
        new window.google.maps.Marker({
          position: { lat, lng },
          map: map.current,
        });
      } else {
        alert('Location not found!');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or country"
      />
      <button onClick={handleSearch}>Search</button>
      
      <div id="map" ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
      
      {weather && (
        <div>
          <h3>Weather Information</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
      
        </div>
      )}
    </div>
  );
};

export default MapSearch;
