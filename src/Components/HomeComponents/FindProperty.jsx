import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Autocomplete, Marker, DrawingManager } from '@react-google-maps/api';
const FindProperty = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const category = e.target.cat.value;
    const location = e.target.loc.value;
    const lat = e.target.lat.value;
    const long = e.target.long.value;
    console.log(type, category, location, lat, long);
    navigate(`/property-lists/1/?lat=${lat}&long=${long}&post_type=${type}&property_category=${category}&location=${location}`)

  }

  // auto complete start here 
  const [autocomplete, setAutocomplete] = useState(null);

  const [place, setPlace] = useState(null);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setPlace(autocomplete.getPlace());
      const data = {
        location: autocomplete.getPlace().formatted_address,
        lat: autocomplete.getPlace().geometry.location.lat(),
        long: autocomplete.getPlace().geometry.location.lng()
      };
      document.getElementById('loc').value = data.location;
      document.getElementById('lat').value = data.lat;
      document.getElementById('long').value = data.long;

      // preLoad(data);
    }
  };
  return (
    <div className="find-property pt-40">
      <div className="max-w-[2150px] mt-8 mx-auto md:px-36 sm:px-2 px-4">
        <div className=" bg-[#0E8E94]  drop-shadow-lg px-4 md:px-20 py-4 rounded-md">
          <p className="text-center text-2xl text-white font-semibold mb-4 capitalize">Find your property</p>
          <form onSubmit={handleSubmit}>
            <div className="grid pb-4  md:grid-cols-4 gap-10 grid-cols-1">

              <div className="form-control bg-white rounded-lg w-full max-w-xs">
                <select name="type" className="select w-full border text-black border-black">
                  <option selected>
                    Rent
                  </option>
                  <option>Sales</option>
                </select>
              </div>
              <div className="form-control bg-white rounded-lg w-full max-w-xs">
                <select name="cat" className="select w-full border text-black border-black">
                  <option selected>
                    Home
                  </option>
                  <option>Office</option>
                  <option>Appartment</option>
                </select>
              </div>

              <div className="form-control col-span-2 ">
                <div className="input-group w-full">
                  {/* <input name="loc" id="loc" type="text" placeholder="Search your location" className="input w-full text-black border-black input-bordered" /> */}
                  <LoadScript googleMapsApiKey="AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI" libraries={["places", "drawing"]} className='w-full'>
                    <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}  >
                      <input
                        type="text" name='location' id='loc'
                        className="input w-[15rem] md:w-[450px] bg-white text-black border-black input-bordered"
                        placeholder="Search your location"
                      />
                    </Autocomplete>
                  </LoadScript>
                  <button type="submit" className="btn md:ms-2  bg-[#1bafb7] border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>

            </div>
            <div className="hidden">
              <input type="text" name="lat" id="lat" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <input type="text" name="long" id="long" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default FindProperty;
