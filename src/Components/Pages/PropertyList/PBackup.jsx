import { } from 'react-icons/fa';
import './PropertyList.css'
import { useEffect, useState } from 'react';
import SingleProperty from '../../HomeComponents/SingleProperty';
import MapComponent from "../map";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCallback } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '75vh',
};

const center = {
    lat: -3.745,
    lng: -38.523,
}
const PropertyList = () => {
    const params = useParams();
    const id = params.id;
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const lat = url.searchParams.get('lat');
    const long = url.searchParams.get('long');
    const property_category = url.searchParams.get('property_category');
    const post_type = url.searchParams.get('post_type');
    var location = url.searchParams.get('location');
    const [propertyCard, setPropertyCard] = useState();
    const handleFilter = (e) => {
        e.preventDefault();
        location = e.target.location.value;
        const post_type = e.target.type.value;
        const property_category = e.target.cat.value;
        const radius = e.target.range.value;
        const lat = url.searchParams.get('lat');
        const long = url.searchParams.get('long');
        const data = {
            type: post_type,
            category: property_category,
            location: location,
            lat: lat,
            long: long,
            radius: radius
        }
        preLoad(data);
    }

    // const [price, setPrice] = useState(40);
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
            setPropertyCard(res.data)
        }
        catch (error) {
        }
    }
    useEffect(() => {
        if (id === undefined) {
        }
        else {
            const data = {
                type: post_type,
                category: property_category,
                location: location,
                lat: lat,
                long: long
            }
            preLoad(data);
        }

    }, [])
    // test me 

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState(null); // Initialize center as null
    const [autocomplete, setAutocomplete] = useState(null);
    const [place, setPlace] = useState(null);
    const [selectedShape, setSelectedShape] = useState(null);
    const [drawingManagerOptions, setDrawingManagerOptions] = useState(null);
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



    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            setPlace(autocomplete.getPlace());
        }

    };
    const polyLoad = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/polygon/`, {
                params: data
            }, config, { withCredentials: true });
            setPropertyCard(res.data)
        }
        catch (error) {
        }
    }

    const onPolygonComplete = useCallback((polygon) => {
        if (selectedShape) {
            selectedShape.setMap(null);
        }
        setSelectedShape(polygon);

        // Initialize min and max values
        let minLat = 90.0, maxLat = -90.0, minLng = 180.0, maxLng = -180.0;

        // Iterate over the polygon vertices
        const vertices = polygon.getPath();
        for (let i = 0; i < vertices.getLength(); i++) {
            const xy = vertices.getAt(i);
            if (xy.lat() < minLat) minLat = xy.lat();
            if (xy.lat() > maxLat) maxLat = xy.lat();
            if (xy.lng() < minLng) minLng = xy.lng();
            if (xy.lng() > maxLng) maxLng = xy.lng();
        }

        const lat1 = document.getElementById('lat1');
        const lat2 = document.getElementById('lat2');

        const long1 = document.getElementById('long1');
        const long2 = document.getElementById('long2');
        const type = document.getElementById('type').value;
        const category = document.getElementById('cat').value;
        lat1.value = minLat;
        lat2.value = maxLat;

        long1.value = minLng;
        long2.value = maxLng;

        const data = {
            minlat: minLat,
            maxlat: maxLat,
            minlong: minLng,
            maxlong: maxLng,
            type: type,
            category: category
        }
        polyLoad(data);

        // Handle the min and max values as needed
        // e.g., set them in the state, or pass them to another function

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

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);


    // for filters under the search fields 
    const [range, setRange] = useState(10);
    const [type, setType] = useState('');
    const [cat, setCat] = useState('');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className='mx-6 md:h-full h-full '>

                <div className='md:sticky md:top-24'>
                    <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places", "drawing"]}    >
                        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
                            <div className=" px-4 py-4 rounded-md">
                                <form onSubmit={handleFilter} >
                                    <input
                                        type="text" name='location' id='search'
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
                                        <div className="polygone">
                                            <input type="text" name="lat1" id="lat1" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                            <input type="text" name="lat2" id="lat2" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                            <input type="text" name="long1" id="long1" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                            <input type="text" name="long2" id="long2" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                    </div>
                                    <button type='submit ' >Filter</button>
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
                </div>
            </div>
            <div className='w-full md:px-2 py-4 md:mt-0'>
                {/* for search fields  */}
                <div className=''>
                    {/* <div className='flex items-center my-3'>
                        <h2 className='text-black font-semibold w-40'>Radius: {range} km</h2>
                        <input
                            type="range"
                            min={0}
                            max={150}
                            value={range}
                            className="range range-xs range-success"
                            onChange={(e) => setRange(e.target.value)}
                        />
                    </div> */}
                    {/* <div className="grid grid-flow-row-dense grid-cols-3 gap-3">
                        <div className="col-span-2">
                            <input className='w-full border border-black h-10 rounded-md text-black ps-2' placeholder='Type address,city,area' type="text" />
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Rental</option>
                                <option value="male">Sales</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">House</option>
                                <option value="male">Appartment</option>
                                <option value="other">Office</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Bedroom</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Min Baths</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="w-full role text-black  bg-white border-black round  rounded-md ed-lg p-2" >
                                <option value="female">Stories Number</option>
                                <option value="male">1</option>
                                <option value="other">2</option>
                                <option value="male">3</option>
                                <option value="other">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-2">
                        <div>
                            <input className='border w-full border-black p-2   rounded-md text-black' placeholder='Min. Size' type="text" />
                        </div>
                        <div>
                            <input className='border border-black p-2 rounded-md text-black  w-full' placeholder='Year Built' type="text" />
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <h2 className='text-black font-semibold w-60'>Price :
                            <span className='primary-color'>  € 0 to € {price} </span>
                        </h2>
                        <input
                            type="range"
                            min={0}
                            max={150000}
                            value={price}
                            className="range  range-xs range-success"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div> */}
                </div>
                {/* show properties  */}
                <div className=''>
                    {/* before property  */}
                    <div className=' my-5  '>
                        <h1 className='text-3xl md:text-4xl text-center  text-gradient font-semibold'>Our Properties</h1>
                    </div>
                    <div
                        id="SingleCard"
                        className="grid my-4 md:grid-cols-2 xl:grid-cols-2 items-center justify-between gap-x-6 gap-y-6 mt-8 md:mx-0 mx-6 "
                    >
                        {propertyCard && propertyCard.map((e, index) => (
                            <SingleProperty key={index} singleCard={{ area: e.loc, title: e.title, price: e.price, currency: e.price_unit, image: e.thumbnail, country: e.address.country, state: e.address.state, bed: e.details.bed, bath: e.details.bath, size: e.details.size, size_unit: e.details.size_unit, price_type: e.price_type, sku: e.sku }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;

