import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, DrawingManager } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '75vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
}

const Map = (location) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null); // Initialize center as null
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [drawingManagerOptions, setDrawingManagerOptions] = useState(null);
  console.log(location)
  // const searchBox = document.getElementById('search').setValue(location);
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

  const preLoad = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/search/`, {
        params: data
      }, config, { withCredentials: true });
      console.log(res.data)
      setPropertyCard(res.data)
      console.log(propertyCard)
    }
    catch (error) {
      console.log(error.response.data);
    }
  }
  const handleFilter = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const type = e.target.type.value;
    const cat = e.target.cat.value;
    const radius = e.target.range.value;
    console.log(location, type, cat, radius)
    const data = {
      type: post_type,
      category: property_category,
      location: location,
      lat: lat,
      long: long
    }
    preLoad(data);
  }

  // for filters under the search fields 
  const [range, setRange] = useState(10);
  const [type, setType] = useState('');
  const [cat, setCat] = useState('');
  console.log(type);
  console.log(cat);
  console.log(range);
  return (
    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places", "drawing"]}    >
      <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
        <div className=" px-4 py-4 rounded-md">
          <form onSubmit={handleFilter} >
            <input
              type="text" name='location' id='search' value={location.location}
              className="input w-full my-4 text-black border-black input-bordered"
              placeholder="Search your location"
              style={{ width: '100%' }}
            />
            <div className="grid pb-4  md:grid-cols-3 gap-10 grid-cols-1">

              <div className="form-control md:mt-0 mt-4 bg-white rounded-lg w-full max-w-xs">
                <select onChange={(e) => setType(e.target.value)} name="type" className="select w-full border text-black border-black">
                  <option selected>
                    Rent
                  </option>
                  <option>Sales</option>
                </select>
              </div>
              <div className="form-control bg-white rounded-lg w-full max-w-xs">
                <select name="cat" onChange={(e) => setCat(e.target.value)} className="select w-full border text-black border-black">
                  <option selected>
                    Home
                  </option>
                  <option>Office</option>
                  <option>Appartment</option>
                </select>
              </div>
              <div className="dv">
                <input
                  type="range"
                  id="rangeInput"
                  min={0}
                  name='range'
                  max={20}
                  value={range}
                  className="range range-xs range-success appearance-none w-full mt-1"
                  onChange={(e) => setRange(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-500">{`Selected value: ${range} Km`}</p>
              </div>
            </div>
            <div className="hidden">
              <input type="text" name="lat" id="lat" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <input type="text" name="long" id="long" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button type='submit' >Filter</button>
          </form>
        </div>
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