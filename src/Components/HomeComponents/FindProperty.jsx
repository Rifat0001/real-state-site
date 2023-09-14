import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
const FindProperty = () => {
  return (
    <div className="navbarx py-5 rounded-md">
      <div className="max-w-[2150px] mx-auto xl:px-40 md:px-10 sm:px-2 px-4">
        {/* <h3 className="text-3xl font-bold text-center text-black mb-4">
          Find Your Property
        </h3> */}
        <div className="flex md:flex-row flex-col ">
          <div className="md:ms-4 md:mb-0 mb-6 flex justify-center ms-0 ">
            <button className="btn choose md:w-[70px] w-[10rem]  text-black border drop-shadow me-2 bg-[#F5F5F5]">
              Buy
            </button>
            <button className="btn choose  md:w-[70px] w-[10rem] text-black border drop-shadow me-2 bg-[#F5F5F5]">
              Rent
            </button>
          </div>
          <div className="flex justify-center">
            <select
              name="cars"
              className="text-black md:mb-0 mb-6 border-none bg-[#F5F5F5] drop-shadow border md:w-[200px] w-[20.5rem] h-[48px] rounded-md  md:ms-4  p-3 font-semibold "
              id="cars"
            >
              <option value="volvo">Homes</option>
              <option value="saab">Room</option>
              <option value="opel">Garage</option>
              <option value="audi">New Homes</option>
            </select>

          </div>
          <div className="flex justify-center items-center gap-2 md:gap-4 drop-shadow  ms-0 md:ms-20">
            <div className="flex border items-center gap-4 h-full bg-[#F5F5F5] rounded-md">
              <FaSearch className="text-2xl ms-2 "></FaSearch>
              <input
                className="search border md:w-[550px] w-[185px]  rounded-md text-black h-12 md:h-full border-none bg-[#F5F5F5]"
                type="text"
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
