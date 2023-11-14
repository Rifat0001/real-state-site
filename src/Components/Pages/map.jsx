import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '75vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
}

const Map = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null); // Initialize center as null
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [drawingManagerOptions, setDrawingManagerOptions] = useState(null);
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user's location: ", error);
          // Set a fallback center if location access is denied
          setCenter({ lat: -3.745, lng: -38.523 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Set a fallback center if geolocation is not supported
      setCenter({ lat: -3.745, lng: -38.523 });
    }
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setPlace(autocomplete.getPlace());
    }
  };


  const onPolygonComplete = useCallback((polygon) => {
    if (selectedShape) {
      selectedShape.setMap(null);
    }
    setSelectedShape(polygon);

    polygon.addListener('click', () => {
      setSelectedShape(polygon);
    });
  }, [selectedShape]);

  const deleteSelectedShape = () => {
    if (selectedShape) {
      selectedShape.setMap(null);
      setSelectedShape(null);
    }
  };

  const onDrawingManagerLoad = drawingManager => {
    // Set options here to ensure google object is available
    setDrawingManagerOptions({
      drawingControl: true,
      drawingControlOptions: {
        position: window.google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          window.google.maps.drawing.OverlayType.CIRCLE,
          window.google.maps.drawing.OverlayType.POLYGON
        ],
      },
      polygonOptions: {
        fillColor: '#ffff00',
        fillOpacity: 0.5,
        strokeWeight: 2,
        clickable: true,
        editable: true,
        zIndex: 1,
      },
    });
  };


  useEffect(() => {
    getUserLocation();
    if (map) {
      // Set drawing manager options once map is loaded
      onDrawingManagerLoad();
    }

  }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places", "drawing"]}    >
      <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Enter a location"
          style={{ width: '100%' }}
        />
      </Autocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={place ? place.geometry.location : center}
        zoom={18}
        onLoad={onLoad}
      >
        {place && (
          <Marker
            position={place.geometry.location}
            icon={{
              url: 'https://cdn-icons-png.flaticon.com/512/0/619.png', // URL for the blue marker
              // Width and height of the marker icon
            }}
          />
        )}
        {drawingManagerOptions && (
          <DrawingManager
            onPolygonComplete={onPolygonComplete}
            options={drawingManagerOptions}
          />
        )}

      </GoogleMap>
      <button onClick={deleteSelectedShape} style={{ marginTop: '10px' }}>
        Delete Selected Polygon
      </button>
    </LoadScript>
  );
};

export default Map;