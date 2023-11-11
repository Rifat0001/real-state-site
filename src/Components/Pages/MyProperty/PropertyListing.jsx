import { useState } from "react";
import axios from 'axios';
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

  // for handle 
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.propertyPrice.value;
    const currency = e.target.propertyCurrency.value;
    const duration = e.target.propertyDuration.value;
    const category = e.target.category.value;
    const postType = e.target.postType.value;
    const postStatus = e.target.postStatus.value;
    const thumbnail = e.target.thumbnail.files;
    const multiple = e.target.multipleImage.files;
    const video = e.target.video.value;
    const loc = e.target.loc.value;
    const lat = e.target.lat.value;
    const long = e.target.long.value;
    const house = e.target.house.value;
    const streetAddress = e.target.streetAddress.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const country = e.target.country.value;
    const zip = e.target.zip.value;
    const unit = e.target.unit.value;
    const propertySize = e.target.propertySize.value;
    const rooms = e.target.rooms.value;
    const bathrooms = e.target.bathrooms.value;
    const bedrooms = e.target.bedrooms.value;
    const customId = e.target.customId.value;
    const yearBuilt = e.target.yearBuilt.value;
    const garages = e.target.garages.value;
    const date = e.target.date.value;
    const garageSize = e.target.garageSize.value;
    const floorNo = e.target.floorNo.value;
    const check = e.target.check.value;
    // // e.target.reset();
    // console.log(title, description, price, currency, duration, category, postType, thumbnail, multiple, video, loc, lat, long, house, streetAddress, address, city, state, country, zip, unit, propertySize, rooms, bathrooms, bedrooms, customId, yearBuilt, garages, date, garageSize, floorNo, check);
    const data = {
      'desc': description,
      'lat': lat,
      'loc': loc,
      'long': long,
      'post_type': postType,
      'price': price,
      'price_unit': currency,
      'price_type': duration,
      'property_category': category,
      'thumbnail': thumbnail[0],
      'title': title,
      'property_status': postStatus
    }
    console.log(thumbnail[0])
    postSubmit(data);
  };

  const postSubmit = async (data) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
      }
    };
    try {

      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/add-property/`, data, config, { withCredentials: true });

      console.log(res.data);


    } catch (error) {
      console.log(error.response.data)

    }
  }

  return (
    <div className="py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      <h2 className="text-center md:text-4xl text-2xl text-gradient  font-bold">
        Add Your Property Details
      </h2>
      <Helmet>
        <script src="./script1.js" ></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&callback=initMap" type="text/javascript" />
      </Helmet>
      <form encType="multipart/form-data"
        onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold">Title*</span>
          </label>
          <input
            type="text"
            placeholder="Add Title"
            className="input input-bordered border  border-black"
            color="black"
            required
            name="title"
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
                color="black" name="propertyPrice"
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
                name="propertyCurrency"
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
                name="propertyDuration"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold text-black py-3">
            Select Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Category
                </span>
              </label>
              <select name="category" className="select border border-black">
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
              <select name="postType" className="select border border-black">
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
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Post Status
                </span>
              </label>
              <select name="postStatus" className="select border border-black">
                <option disabled selected>
                  Post Status
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>

          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold capitalize text-black py-3">
            Thumbnail
          </h2>
          <input className="file-input file-input-bordered" name="thumbnail" onChange={fileInp2} accept="image/*" type='file' id="imgInp2" />
          <div className="blah flex max-w-md flex-wrap gap-4 py-4" id="image-preview-container2">

          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold capitalize text-black py-3">
            Add property images (multiple)
          </h2>
          <input className="file-input file-input-bordered" name="multipleImage" onChange={fileInp} multiple accept="image/*" type='file' id="imgInp" />
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
              <input name="video" type="file" className="file-input file-input-bordered" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Latitude
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Latitude"
                className="input input-bordered border b border-black text-black"
                color="black"
                required
                id="lat"
                name="lat"
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
                name="long"
              />
            </div>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">
                  House
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="input input-bordered border border-black"
                color="black"
                name="house"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Street Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="input input-bordered border border-black"
                color="black"
                required
                name="streetAddress"
              />
            </div>
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
                name="address"
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
                name="city"
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
                name="state"
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
                name="country"
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
                name="zip"
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
                <select name="unit" className="select border border-black">
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
                  name="propertySize"
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
                  name="rooms"
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
                  name="bathrooms"
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
                  name="bedrooms"
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
                  name="customId"
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
                  name="yearBuilt"
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
                  name="garages"
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
                  name="date"
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
                  name="garageSize"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-bold">
                    Floor No
                  </span>
                </label>
                <input
                  name="floorNo"
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
                <input type="checkbox" name="check" className="checkbox checkbox-success" />
                <p>Hide Contact</p>
              </div>
            </div>

          </div>
          <div>
            <button type="submit" className="btn btn-gradient border-none my-6 w-full">Submit</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default PropertyListing;
