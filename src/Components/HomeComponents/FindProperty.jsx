import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
const FindProperty = () => {
  return (
    <div className=" ">
      <div className="max-w-[2150px] mt-8 mx-auto xl:px-36 md:px-10 sm:px-2 px-4">
        {/* <h3 className="text-3xl font-bold text-center text-black mb-4">
          Find Your Property
        </h3> */}
        <div className="flex bg-white drop-shadow-lg  py-8 rounded-md  ps-4 md:flex-row flex-col ">
          <div className="flex justify-center">
            <select
              name="cars"
              className="text-black md:mb-0 mb-6 border-black drop-shadow border md:w-[200px] w-[20.5rem] h-[48px] rounded-md  md:ms-4  p-3 font-semibold "
              id="cars"
            >
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>

          </div>
          <div className="flex justify-center">
            <select
              name="cars"
              className="text-black md:mb-0 mb-6 border border-black drop-shadow  md:w-[200px] w-[20.5rem] h-[48px] rounded-md  md:ms-4  p-3 font-semibold"
              id="cars"
            >
              <option value="volvo">Homes</option>
              <option value="saab">Room</option>
              <option value="opel">Garage</option>
              <option value="audi">New Homes</option>
            </select>

          </div>
          <div className="flex justify-center items-center gap-2 md:gap-4 drop-shadow  ms-0 md:ms-20">
            <div className="flex border items-center gap-4 h-full rounded-md">

              <input
                className="search border md:w-[560px] w-[185px]text-black border-black rounded-md h-12 md:h-full ps-4 text-black border-none bg-white"
                type="text" placeholder="Enter your location "
              />
            </div>
            <button className="btn btn-gradient border-none drop-shadow-md ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProperty;
