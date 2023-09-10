const PropertyListing = () => {
  return (
    <div className="py-20 max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4 text-black">
      <h2 className="text-center text-4xl font-bold">
        Add Your Property Details
      </h2>
      <form>
        <div className="card-body">
          <div className="form-control">
            <h2 className=" text-xl font-bold text-blue-500 py-3">
              Property Description
            </h2>
            <label className="label">
              <span className="label-text text-blue-500 font-bold">Title*</span>
            </label>
            <input
              type="text"
              placeholder="Add Title"
              className="input input-bordered"
              color="black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-500 font-bold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Add Description"
              className="input pt-3 input-bordered"
            ></textarea>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-blue-500 py-3">
              Property Price
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Price in € (only numbers)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    {'After Price Label (ex: "/month")'}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    {'Before Price Label (ex: "from ")'}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-blue-500 py-3">
              Select Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Category
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Listed In
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Property Status
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
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
            <h2 className=" text-xl font-bold text-blue-500 py-3">
              Listing Media
            </h2>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <p>
              * At least 1 image is required for a valid submission.Minimum size
              is 500/500px. <br />
              ** Double click on the image to select featured. <br />
              *** Change images order with Drag & Drop. <br />
              **** PDF files upload supported as well. <br />
              ***** Images might take longer to be processed.
            </p>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-blue-500 py-3">
              Video Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Video From
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Embed Video id:
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Add Title"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Virtual Tour
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Add Title"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-blue-500 py-3">
            Listing Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Country
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    City
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Neighborhood
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Zip
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    State
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold text-blue-500 py-3">
            Listing Details
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Size in m2
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Lot Size in m2
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Rooms
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Bathrooms
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Bedrooms
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                    Customer Id
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Year Built
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Garages 
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  External Construction
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Basement 
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Available from 
                  </span>
                </label>
                <input
                  type="date"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Garage Size
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Exterior Material
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Roofing 
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  Structure Type
                  </span>
                </label>
                <input
                  type="date"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-500 font-bold">
                  GFloors No
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Give label"
                  className="input input-bordered"
                  color="black"
                  required
                />
              </div>
              <div className="form-control col-span-4">
            
            <label className="label">
              <span className="label-text text-blue-500 font-bold">Owner / Agent Notes</span>
            </label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Add Description"
              className="input pt-3 input-bordered"
            ></textarea>
          
          </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyListing;
