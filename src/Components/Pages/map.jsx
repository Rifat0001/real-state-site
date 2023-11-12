import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [key, setKey] = useState(0); // New key state for Marker
  const [marker,setMarker] = useState()

  // Get current position using browser's geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setKey(prevKey => prevKey + 1); // Update key to trigger Marker update
    });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    setMarker(<Marker
        key={key}
        position={currentPosition}
    />)
  }, [currentPosition]);

  const mapStyles = {
    height: '75%',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={currentPosition}
      >
        {currentPosition.lat !== 0 && ( // Render Marker only if position is set
            marker
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
