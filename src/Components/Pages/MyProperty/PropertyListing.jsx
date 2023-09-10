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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyListing;
