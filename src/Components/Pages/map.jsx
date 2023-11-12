// App.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '75vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setPlace(autocomplete.getPlace());
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places"]}>
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
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// // App.js
// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '75vh',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const App = () => {
//   const [map, setMap] = useState(null);
//   const [autocomplete, setAutocomplete] = useState(null);
//   const [place, setPlace] = useState(null);
//   const [markerPosition, setMarkerPosition] = useState(center);

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onPlaceChanged = () => {
//     if (autocomplete !== null) {
//       setPlace(autocomplete.getPlace());
//       setMarkerPosition(autocomplete.getPlace().geometry.location);
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places"]}>
//       <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
//         <input
//           type="text"
//           placeholder="Enter a location"
//           style={{ width: '100%' }}
//         />
//       </Autocomplete>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={place ? place.geometry.location : center}
//         zoom={18}
//         onLoad={onLoad}
//       >
//         {markerPosition && <Marker position={markerPosition} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default App;
