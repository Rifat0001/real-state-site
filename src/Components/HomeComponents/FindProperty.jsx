import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
import { Helmet } from "react-helmet";
import axios from "axios";
const FindProperty = () => {

  // imgInp.addEventListener('change', fileInp);
  const componentDidMount = () => {
    this.initMap();
    this.initAutocomplete();
  }

  const initMap = () => {
    const success = (position) => {
      let markerOptions = {
        position: { lat: position.coords.latitude, lng: position.coords.longitude }
      };

      let marker = new window.google.maps.Marker(markerOptions);

      let mapOptions = {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 18,
        draggable: true,
        mapTypeId: 'satellite'
      };

      let map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

      map.setTilt(45);
      marker.setMap(map);
    };

    const error = () => {
      console.log('Error');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  const initAutocomplete = () => {
    const searchInput = 'loc';

    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById(searchInput),
      {
        types: ['geocode'],
      }
    );

    window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      } else {
        const lat1 = place.geometry.location.lat();
        const lng1 = place.geometry.location.lng();
        const lt = document.getElementById('lat');
        const lg = document.getElementById('long');
        lt.value = lat1;
        lg.value = lng1;
        let markerOptions = {
          position: { lat: lat1, lng: lng1 }
        };

        let marker = new window.google.maps.Marker(markerOptions);

        let mapOptions = {
          center: { lat: lat1, lng: lng1 },
          zoom: 18,
          draggable: true,
          mapTypeId: 'satellite'
        };

        let map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

        map.setTilt(45);
        marker.setMap(map);
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const category = e.target.cat.value;
    const location = e.target.loc.value;
    const lat = e.target.lat.value;
    const long = e.target.long.value;
    console.log(type, category, location, lat, long)
    const data = {
      type: type,
      category: category,
      location: location,
      lat: lat,
      long: long
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
      };
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/search/`, data, config, { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="find-property pt-40">
      <div className="max-w-[2150px] mt-8 mx-auto md:px-36 sm:px-2 px-4">
        <Helmet>
          <script src="./script1.js" ></script>
          <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&callback=initMap" type="text/javascript" />
        </Helmet>
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

              <div className="form-control bg-white rounded-lg col-span-2">
                <div className="input-group w-full">
                  <input name="loc" id="loc" type="text" onChange={initAutocomplete} placeholder="Search your location" className="input w-full text-black border-black input-bordered" />
                  <button type="submit" className="btn  bg-[#1bafb7] border-none">
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
      </div>
    </div >
  );
};

export default FindProperty;
