import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
const FindProperty = () => {
  return (
    <div className="bg-blue-100 pt-16 p-2 pb-16 rounded-md">
      <div className="max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
        {/* <h3 className="text-3xl font-bold text-center text-black mb-4">
          Find Your Property
        </h3> */}
        <div className="flex md:flex-row flex-col ">
          <div className="md:ms-4 md:mb-0 mb-6 flex ms-0 ">
            <button className="btn choose md:w-[70px] w-[180px]  text-black border-none drop-shadow-lg me-2 bg-white">
              Buy
            </button>
            <button className="btn choose  md:w-[70px] w-[180px] text-black border-none drop-shadow-lg me-2 bg-white">
              Rent
            </button>
          </div>
          <div>
            <select
              name="cars"
              className="text-black md:mb-0 mb-6 border-none drop-shadow-lg md:w-[200px] w-full h-[48px] rounded-md ms-0 md:ms-4 ps-3 font-semibold "
              id="cars"
            >
              <option value="volvo">Homes</option>
              <option value="saab">Room</option>
              <option value="opel">Garage</option>
              <option value="audi">New Homes</option>
            </select>
          </div>
          <div className="flex items-center gap-2 md:gap-4 drop-shadow-lg ms-0 md:ms-20">
            <div className="flex items-center gap-4 h-full bg-white rounded-md">
              <FaSearch className="text-2xl ms-2"></FaSearch>
              <input
                className="search border md:w-[550px] w-[225px]  rounded-md text-black h-12 md:h-full border-none"
                type="text"
              />
            </div>
            <button className="btn btn-primary ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProperty;
