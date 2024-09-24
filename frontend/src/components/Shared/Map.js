import React from 'react';

const Map = ({ city }) => {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${city}`;

  return (
    <div style={{ marginTop: '20px' }}>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>
    </div>
  );
};

export default Map;
