import { FaSearch } from "react-icons/fa";
import "./HomeComponents.css";
const FindProperty = () => {
  return (
    <div className="find-property pt-40">
      <div className="max-w-[2150px] mt-8 mx-auto md:px-36 sm:px-2 px-4">

        <div className=" bg-[#0E8E94]  drop-shadow-lg px-4 md:px-20 py-4 rounded-md">
          <p className="text-center text-2xl text-white font-semibold mb-4">Find your property in Portugal</p>
          <div className="grid  md:grid-cols-4 gap-10 grid-cols-1">
            <div className="form-control bg-white rounded-lg w-full max-w-xs">
              <select className="select w-full border text-black border-black">
                <option selected>
                  Rent
                </option>
                <option>Sales</option>
              </select>
            </div>
            <div className="form-control bg-white rounded-lg w-full max-w-xs">
              <select className="select w-full border text-black border-black">
                <option selected>
                  Home
                </option>
                <option>Office</option>
                <option>Appartment</option>

              </select>
            </div>
            <div className="form-control bg-white rounded-lg col-span-2">
              <div className="input-group w-full">
                <input type="text" placeholder="Search your location" className="input w-full border-black input-bordered" />
                <button className="btn  bg-[#1bafb7] border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProperty;
