import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  // Get current position using browser's geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const mapStyles = {
    height: '400px',
    width: '100%',
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
      <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={18}
            center={currentPosition&& currentPosition}
        >
        </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Map = () => {
//   const [currentPosition, setCurrentPosition] = useState(null);
//   const [key, setKey] = useState(0); // New key state for Marker
//   const [isLoaded,setIsLoaded] = useState(null)

//   // Get current position using browser's geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setKey(prevKey => prevKey + 1); // Update key to trigger Marker update
//       });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   useEffect(() => {
//     if(currentPosition==null){
//         console.log("Initializing!...")
//     }else{
//         console.log(currentPosition)
//         console.log("INITIALIZED")
//         setIsLoaded(
//             <GoogleMap
//             mapContainerStyle={mapStyles}
//             zoom={18}
//             center={currentPosition || { lat: 0, lng: 0 }} // Center at 0,0 until position is available
//         >
//             {currentPosition&& (
//             <Marker
//                 key={key}
//                 position={currentPosition}
//             />
//             )}
//         </GoogleMap>
//         )
//     }
//   }, [currentPosition]);

//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   const Smap = <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={18}
//         center={currentPosition || { lat: 0, lng: 0 }} // Center at 0,0 until position is available
//     >
//         {currentPosition&& (
//         <Marker
//             key={key}
//             position={currentPosition}
//         />
//         )}
//     </GoogleMap>
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
//       {isLoaded&& isLoaded}
//     </LoadScript>
//   );
// };

// export default Map;
// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Map = () => {
//   const [currentPosition, setCurrentPosition] = useState(null);
//   const [key, setKey] = useState(0); // New key state for Marker

//   // Get current position using browser's geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setKey(prevKey => prevKey + 1); // Update key to trigger Marker update
//       });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={18}
//         center={currentPosition || { lat: 0, lng: 0 }} // Center at 0,0 until position is available
//       >
//         {currentPosition&& (
//           <Marker
//             key={key}
//             position={currentPosition}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Map = () => {
//   const [currentPosition, setCurrentPosition] = useState({ lat: null, lng: null });
//   const [key, setKey] = useState(0); // New key state for Marker
//   const [marker,setMarker] = useState()

//   // Get current position using browser's geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setKey(prevKey => prevKey + 1); // Update key to trigger Marker update
//     });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   useEffect(() => {
//     if(currentPosition.lat==0){
//         console.log("Not Initialized YeTTT!")
//     }else{
//         setMarker(<Marker
//             key={key}
//             position={currentPosition}
//         />)
//     }
    
//   }, [currentPosition]);

//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={18}
//         center={currentPosition}
//       >
//         {currentPosition.lat&& marker}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Map = () => {
//   const [currentPosition, setCurrentPosition] = useState({ lat: null, lng: null });
//   const [markerPosition, setMarkerPosition] = useState(null);

//   // Get current position using browser's geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setMarkerPosition({
//             lat:currentPosition.lat,
//             lng:currentPosition.lng
//         });
//       });
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   useEffect(() => {
//     console.log(currentPosition.lat,currentPosition.lng)
//     setMarkerPosition({
//         lat:currentPosition.lat,
//         lng:currentPosition.lng
//     });
//   }, [currentPosition]);

// //   const handleMapClick = (e) => {
// //     setMarkerPosition({
// //     //   lat: e.latLng.lat(), // DONT REMOVE< ITS FOR FUTURE USE
// //     //   lng: e.latLng.lng(),
// //     });
// //   };

//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={18}
//         center={currentPosition}
//       >
//         {currentPosition.lat && 
//           <Marker
//             position={currentPosition}
//           />
//         }

//         {markerPosition && (
//           <Marker
//             position={markerPosition}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;

// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// const Map = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI",
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
//   const customMarker = {
//     path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
//     fillColor: "red",
//     fillOpacity: 2,
//     strokeWeight: 1,
//     rotation: 0,
//     scale: 1,
//   };

//   return (
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}
//         >
//           {/* <Marker
//             position={{ lat: 18.52043, lng: 73.856743 }}
//             icon={customMarker}
//           /> */}
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default Map;