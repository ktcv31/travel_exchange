exports.getMapByLocation = (req, res) => {
    const { city, country } = req.query;
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;;
  
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${city},${country}`;
    res.status(200).json({ success: true, mapUrl: mapUrl });
  };
  
