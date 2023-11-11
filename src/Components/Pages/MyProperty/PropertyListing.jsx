import { useEffect } from "react";
import { Helmet } from 'react-helmet';
const PropertyListing = () => {
  const imgInp = document.getElementById('imgInp');
  const imagePreviewContainer = document.getElementById('image-preview-container');
  const imgInp2 = document.getElementById('imgInp2');
  const imagePreviewContainer2 = document.getElementById('image-preview-container2');

  const fileInp = (e) => {
    const files = imgInp.files;

    // Clear existing previews
    imagePreviewContainer.innerHTML = "";

    // Loop through each selected file
    for (const file of files) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = 'your image';
      img.className = 'preview-image';

      // Append the image to the container
      imagePreviewContainer.appendChild(img);
    }
  };

  const fileInp2 = (e) => {
    const files = imgInp2.files;

    // Clear existing previews
    imagePreviewContainer2.innerHTML = "";

    // Loop through each selected file
    for (const file of files) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = 'your image';
      img.className = 'preview-image';

      // Append the image to the container
      imagePreviewContainer2.appendChild(img);
    }
  };

  // Add an event listener to handle file input changes
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
  return (
    <div className="py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      <h2 className="text-center md:text-4xl text-2xl text-gradient  font-bold">
        Add Your Property Details
      </h2>
      <form>
        <div className="card-body">
          <div className="form-control">
            {/* <div className="">
              <input onChange={fileInp} multiple accept="image/*" type='file' id="imgInp" />
              <div className="blah">
                <img id="blah" src="#" alt="your image" />
              </div>
            </div> */}

            <Helmet>
              <script src="./script1.js" ></script>
              <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&callback=initMap" type="text/javascript" />
            </Helmet>

            <h2 className=" text-xl font-bold text-black py-3">
              Property Descript1ion
            </h2>
            <label className="label">
              <span className="label-text text-black font-bold">Title*</span>
            </label>
            <input
              type="text"
              placeholder="Add Title"
              className="input input-bordered border  border-black"
              color="black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-bold">
                Description
              </span>
            </label>
            <textarea name="description" id="" cols="30" className="textarea text-lg textarea-border border-black" placeholder="Enter Description" rows="10"></textarea>

          </div>
          <div>
            <h2 className=" text-xl font-bold text-black py-3">
              Property Price
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    {'Currency  (ex: "$")'}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Currency"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    {'Price For Duration (ex: "/month")'}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Duration"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-black py-3">
              Select Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Category
                  </span>
                </label>
                <select className="select border border-black">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Post type
                  </span>
                </label>
                <select className="select border border-black">
                  <option disabled selected>
                    Post Type
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Property Status
                  </span>
                </label>
                <select className="select border border-black">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div> */}
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold capitalize text-black py-3">
              Thumbnail
            </h2>
            <input className="file-input file-input-bordered" onChange={fileInp2} accept="image/*" type='file' id="imgInp2" />
            <div className="blah flex max-w-md flex-wrap gap-4 py-4" id="image-preview-container2">

            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold capitalize text-black py-3">
              Add property images (multiple)
            </h2>
            <input className="file-input file-input-bordered" onChange={fileInp} multiple accept="image/*" type='file' id="imgInp" />
            <div className="blah flex h-1/4 flex-wrap gap-4 py-4" id="image-preview-container">

            </div>
          </div>

          <div>
            <h2 className=" text-xl font-bold text-black py-3">
              Video Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Video From
                  </span>
                </label>
                <input type="file" className="file-input file-input-bordered" />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-black py-3">
              Listing Location
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Find Location
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="input input-bordered border border-black"
                color="black"
                required
                onChange={initAutocomplete}
                name="loc" id="loc"
              />
            </div>
            {/* new chat  */}
            <div id="container">
              <div id="map"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Latitude
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Latitude"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                  id="lat"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Longitude
                  </span>
                </label>
                <input
                  type="text"
                  id="long"
                  placeholder="Enter Longitude"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    City
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    State
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Country
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Zip
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Zip"
                  className="input input-bordered border border-black"
                  color="black"
                  required
                />
              </div>

            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-black py-3">
              Listing Details
            </h2>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Size Unit
                    </span>
                  </label>
                  <select className="select border border-black">
                    <option disabled selected>
                      Select Unit
                    </option>
                    <option>m<sup>2</sup></option>
                    <option>ft<sup>2</sup></option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Property Size
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Size"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Rooms
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Rooms"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Bathrooms
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Bathrooms"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Bedrooms
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Bedrooms"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Custom Id
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Custom Id"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Year Built
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Year Built"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Garages
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Garages"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Available from
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="Give label"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Garage Size
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Garage Size"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-bold">
                      Floor No
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Floor No"
                    className="input input-bordered border border-black"
                    color="black"
                    required
                  />
                </div>
              </div>
              <div className="form-control ">

                <div className="flex gap-3 mt-6">
                  <input type="checkbox" className="checkbox checkbox-success" />
                  <p>Hide Contact</p>
                </div>
              </div>

            </div>
            <div>
              <button className="btn btn-gradient border-none my-6 w-full">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyListing;
